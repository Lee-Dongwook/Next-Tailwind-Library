"use client";

import { useState, useEffect, useRef, useCallback } from "react";

type UseWebSocketOptions = {
  onMessage?: (event: MessageEvent) => void;
  onOpen?: (event: Event) => void;
  onClose?: (event: CloseEvent) => void;
  onError?: (event: Event) => void;
};

export const useWebSocket = (url: string, options?: UseWebSocketOptions) => {
  const [isConnected, setIsConnected] = useState(false);
  const [lastMessage, setLastMessage] = useState<MessageEvent | null>(null);
  const socketRef = useRef<WebSocket | null>(null);

  const sendMessage = useCallback((message: string | ArrayBuffer | Blob) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(message);
    } else {
      console.error("WebSocket is not connected");
    }
  }, []);

  useEffect(() => {
    socketRef.current = new WebSocket(url);

    const socket = socketRef.current;

    socket.onopen = (event) => {
      setIsConnected(true);
      options?.onOpen?.(event);
    };

    socket.onmessage = (event) => {
      setLastMessage(event);
      options?.onMessage?.(event);
    };

    socket.onclose = (event) => {
      setIsConnected(false);
      options?.onClose?.(event);
    };

    socket.onerror = (event) => {
      options?.onError?.(event);
    };

    return () => {
      socket.close();
    };
  }, [url, options]);

  return {
    isConnected,
    lastMessage,
    sendMessage,
  };
};
