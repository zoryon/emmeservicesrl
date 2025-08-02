import { PhotoGalleryLoader } from "@/components/PhotoGalleryLoader";
import CustomSeparator from "@/components/CustomSeparator";

const PhotoGallerySection = () => {
    return (
        <section id="gallery" className="w-full max-w-6xl mx-auto py-16 px-4 text-center">
            <header className="mb-2 uppercase">
                <h1 className="text-3xl lg:text-5xl uppercase tracking-tight">
                    Photo{" "}
                    <span className="font-extrabold">Gallery</span>
                </h1>
                <p>Alcuni nostri lavori</p>
            </header>

            <div className="w-full flex justify-center mb-8">
                <CustomSeparator />
            </div>

            <PhotoGalleryLoader />
        </section>
    );
};

export default PhotoGallerySection;
