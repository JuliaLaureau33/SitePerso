"use client";

import { useEffect } from "react";

export default function DeviceDetector() {
  useEffect(() => {
    // === DÉTECTION DE L'APPAREIL ===
    const ua = navigator.userAgent;
    const isMobile = /iPhone|iPad|iPod|Android|Mobile|webOS|BlackBerry/i.test(ua);
    const isTablet = /iPad|Android(?!.*Mobile)/i.test(ua);
    const isIOS = /iPhone|iPad|iPod/i.test(ua);
    const isAndroid = /Android/i.test(ua);
    const isSafari = /^((?!chrome|android).)*safari/i.test(ua);

    // === DÉTECTION DE LA TAILLE D'ÉCRAN ===
    const width = window.innerWidth;
    const isSmallMobile = width < 380;
    const isMediumMobile = width >= 380 && width < 480;
    const isLargeMobile = width >= 480 && width < 768;

    // === APPLIQUER LES CLASSES SUR LE BODY ===
    if (isMobile) document.body.classList.add("is-mobile");
    if (isTablet) document.body.classList.add("is-tablet");
    if (isIOS) document.body.classList.add("is-ios");
    if (isAndroid) document.body.classList.add("is-android");
    if (isSafari) document.body.classList.add("is-safari");
    if (isSmallMobile) document.body.classList.add("is-small-mobile");
    if (isMediumMobile) document.body.classList.add("is-medium-mobile");
    if (isLargeMobile) document.body.classList.add("is-large-mobile");

    // === DÉTECTION DE LA CONNEXION ===
    type NetworkInformation = {
      effectiveType?: string;
      saveData?: boolean;
      downlink?: number;
      addEventListener?: (type: string, listener: () => void) => void;
      removeEventListener?: (type: string, listener: () => void) => void;
    };
    type NavigatorWithConnection = Navigator & {
      connection?: NetworkInformation;
      mozConnection?: NetworkInformation;
      webkitConnection?: NetworkInformation;
    };
    const nav = navigator as NavigatorWithConnection;
    const connection = nav.connection || nav.mozConnection || nav.webkitConnection;

    let isSlowConnection = false;
    if (connection) {
      const effectiveType = connection.effectiveType;
      const saveData = connection.saveData;
      const downlink = connection.downlink;

      // 2G, slow-2g, ou mode économie de données = connexion lente
      if (effectiveType === "slow-2g" || effectiveType === "2g" || saveData === true || (downlink !== undefined && downlink < 1)) {
        isSlowConnection = true;
        document.body.classList.add("slow-connection");
      } else if (effectiveType === "3g" || (downlink !== undefined && downlink < 2)) {
        document.body.classList.add("medium-connection");
      } else {
        document.body.classList.add("fast-connection");
      }
    }

    // === DÉSACTIVER LES ANIMATIONS LOURDES SUR CONNEXION LENTE OU MOBILE ===
    if (isSlowConnection || isMobile) {
      document.body.classList.add("reduced-motion");
    }

    // === RESPECT DE PRÉFÉRENCE prefers-reduced-motion ===
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.body.classList.add("reduced-motion");
    }

    // === CORRECTION DU 100VH SUR MOBILE (problème de la barre du navigateur) ===
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVH();

    // === RÉACTUALISER AU REDIMENSIONNEMENT ===
    const handleResize = () => {
      setVH();
      const newWidth = window.innerWidth;
      document.body.classList.remove("is-small-mobile", "is-medium-mobile", "is-large-mobile");
      if (newWidth < 380) document.body.classList.add("is-small-mobile");
      else if (newWidth < 480) document.body.classList.add("is-medium-mobile");
      else if (newWidth < 768) document.body.classList.add("is-large-mobile");
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    // === DÉTECTION CHANGEMENT DE CONNEXION ===
    const handleConnectionChange = () => {
      if (!connection) return;
      document.body.classList.remove("slow-connection", "medium-connection", "fast-connection", "reduced-motion");
      const effectiveType = connection.effectiveType;
      const saveData = connection.saveData;
      const downlink = connection.downlink;

      if (effectiveType === "slow-2g" || effectiveType === "2g" || saveData === true || (downlink !== undefined && downlink < 1)) {
        document.body.classList.add("slow-connection", "reduced-motion");
      } else if (effectiveType === "3g" || (downlink !== undefined && downlink < 2)) {
        document.body.classList.add("medium-connection");
      } else {
        document.body.classList.add("fast-connection");
      }

      if (isMobile) document.body.classList.add("reduced-motion");
    };

    if (connection?.addEventListener) {
      connection.addEventListener("change", handleConnectionChange);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      if (connection?.removeEventListener) {
        connection.removeEventListener("change", handleConnectionChange);
      }
    };
  }, []);

  return null;
}
