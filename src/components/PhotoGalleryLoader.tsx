"use client";

import dynamic from "next/dynamic";

const PhotoGalleryClient = dynamic(
    () => import('@/components/PhotoGalleryClient').then((mod) => mod.default),
    {
        ssr: false,
        loading: () => <div className="w-full h-72 lg:h-96 bg-muted rounded-2xl" />,
    }
);

export function PhotoGalleryLoader() {
    return <PhotoGalleryClient />;
}