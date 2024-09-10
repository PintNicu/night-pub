import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

interface GalleryImage {
    imageUrl: string;
    category: string;
}

export interface SliderImage {
    sm: string;
    md: string;
    xl: string;
    alt: string;
}

interface GalleryState {
    images: GalleryImage[];
    sliderImages: SliderImage[];
    isLoading: boolean;
    errorMessage: string | null;
    loadImages: () => Promise<void>;
    setSliderImages: (images: SliderImage[]) => void;
}

const galleryCategories = ['Bar', 'Evenimente', 'Restaurant'];

const useGalleryStore = create<GalleryState>()(
    persist(
        (set) => ({
            images: [],
            sliderImages: [],
            isLoading: false,
            errorMessage: null,
            loadImages: async () => {
                set({ isLoading: true, errorMessage: null });
                try {
                    const storage = getStorage();
                    const firebaseGalleryImages: GalleryImage[] = [];

                    for (const category of galleryCategories) {
                        const categoryRef = ref(storage, category);
                        const result = await listAll(categoryRef);
                        const urlPromises = result.items.map(async (imageRef) => {
                            const imageUrl = await getDownloadURL(imageRef);
                            return { imageUrl, category };
                        });

                        const categoryImages = await Promise.all(urlPromises);
                        firebaseGalleryImages.push(...categoryImages);
                    }

                    set({ images: firebaseGalleryImages, isLoading: false });
                } catch (error) {
                    set({ errorMessage: 'Failed to load gallery images', isLoading: false });
                    console.error('Error loading gallery images:', error);
                }
            },
            setSliderImages: (images: SliderImage[]) => set({ sliderImages: images }),
        }),
        {
            name: 'gallery-storage',
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);

export default useGalleryStore;