"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "./Lanyard.css";

interface LanyardProps {
    position?: [number, number, number];
    gravity?: [number, number, number];
    fov?: number;
    transparent?: boolean;
}

export default function Lanyard({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    position = [0, 0, 30],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    gravity = [0, -40, 0],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fov = 20,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    transparent = true,
}: LanyardProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="lanyard-container">
            {/* Hanging Point */}
            <div className="hanging-point"></div>

            {/* Rope */}
            <div className="rope"></div>

            {/* Lanyard Card */}
            <div className="lanyard-card">
                <div className="photo-container">
                    <Image
                        src="/placeholder-headshot.jpg"
                        alt="Viom Kapur"
                        width={70}
                        height={70}
                        className="photo"
                    />
                </div>
                <div className="text-container">
                    <div className="name">Viom Kapur</div>
                    <div className="title">AI Engineer × Finance</div>
                </div>
            </div>
        </div>
    );
}


