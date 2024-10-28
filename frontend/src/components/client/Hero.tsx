import { type Component, createSignal, onMount } from 'solid-js';

const Hero: Component = () => {
    const [imageLoaded, setImageLoaded] = createSignal(false);
    const imageUrl = '/gamedev.png';

    onMount(() => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => setImageLoaded(true);
    });

    return (
        <div class="relative w-full h-[500px] overflow-hidden mt-4 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class={`absolute inset-0 bg-gray-200 animate-pulse ${imageLoaded() ? 'hidden' : 'block'}`} />

            <div class={`relative h-full ${imageLoaded() ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                <div class="absolute inset-0 bg-black/60" />
                <img src={imageUrl} alt="Hero Background" class="w-full h-full object-cover rounded-lg " />
                <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                    <h1 class="text-5xl font-bold mb-4">Explore Events</h1>
                    <p class="text-xl max-w-2xl">
                        Join amazing coding events and game jams. Connect with fellow developers and
                        showcase your skills.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;