import { type Component, createSignal, onMount } from 'solid-js';
import Skeleton from './Skeleton';

const Hero: Component = () => {
    const [imageLoaded, setImageLoaded] = createSignal(false);
    const imageUrl = '/gamedev.png';

    onMount(() => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => setImageLoaded(true);
        img.onerror = () => setImageLoaded(false);
    });

    return (
        <div class="relative w-full h-[360px] lg:h-[500px] overflow-hidden mt-4 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {!imageLoaded() && (
                <div class="absolute inset-0">
                    <Skeleton
                        height="100%"
                        width="100%"
                        rounded="rounded-lg"
                        class="absolute inset-0"
                    />
                    <div class="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                        <Skeleton height={48} width="60%" rounded="rounded-lg" />
                        <Skeleton height={24} width="80%" rounded="rounded-lg" />
                        <Skeleton height={24} width="70%" rounded="rounded-lg" />
                    </div>
                </div>
            )}

            {
                imageLoaded() && (
                    <div class="relative h-full transition-opacity duration-300">
                        <img src={imageUrl} alt="Hero Background" class="w-full h-full object-cover rounded-lg brightness-[.30]" />
                        <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                            <h1 class="text-4xl lg:text-5xl font-bold font-mono mb-4">Explore Events</h1>
                            <p class="text-lg lg:text-xl max-w-2xl font-sans">
                                Join amazing coding events and game jams. Connect with fellow developers and
                                showcase your skills.
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Hero;