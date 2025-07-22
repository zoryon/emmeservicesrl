import CustomSeparator from "@/components/CustomSeparator";
import { PhotoGalleryLoader } from "@/components/PhotoGalleryLoader";

const PhotoGallerySection = () => {
    return (
        <section id="photogallery" className="w-full max-w-6xl mx-auto py-16 px-4 text-center">
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
