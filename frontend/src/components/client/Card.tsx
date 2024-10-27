import type { Component } from 'solid-js';
import { createMemo } from 'solid-js';

interface CardProps {
    title: string;
    date: string;
    type: string;
    currentParticipants: number;
    maxParticipants: number;
    backgroundImage: string;
    endDate: string;
    startDate: string;
}

const Card: Component<CardProps> = (props) => {
    const participantPercentage = (props.currentParticipants / props.maxParticipants) * 100;

    const getEventStatus = createMemo(() => {
        const now = new Date();
        const startDate = new Date(props.startDate);
        const endDate = new Date(props.endDate);

        if (now > endDate) return { type: 'ended', label: 'Ended', class: 'bg-gray-600/80' };
        if (now < startDate) {
            const daysToStart = Math.ceil((startDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
            return {
                type: 'upcoming',
                label: `Starts in ${daysToStart} days`,
                class: 'bg-blue-600/80'
            };
        }

        const hoursLeft = Math.ceil((endDate.getTime() - now.getTime()) / (1000 * 60 * 60));
        if (hoursLeft <= 24) {
            return {
                type: 'ending-soon',
                label: `${hoursLeft}h left`,
                class: 'bg-red-600/80 animate-pulse'
            };
        }

        const daysLeft = Math.ceil(hoursLeft / 24);
        return {
            type: 'active',
            label: `${daysLeft} days left`,
            class: 'bg-green-600/80'
        };
    });

    const isFull = createMemo(() => props.currentParticipants >= props.maxParticipants);

    return (
        <div class="relative group">
            <div class="bg-[#161B22] rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                <div class="relative aspect-[4/3]">
                    {/* Background Image */}
                    <div
                        class="absolute inset-0 bg-cover bg-center"
                        style={`background-image: url(${props.backgroundImage})`}
                    />

                    {/* Gradient Overlay */}
                    <div class="absolute inset-0 bg-gradient-to-b from-[#161B22]/40 via-[#161B22]/60 to-[#161B22]">
                        {/* Status Badge */}
                        <div class="absolute top-3 left-3">
                            <div class={`${getEventStatus().class} backdrop-blur-md rounded-full px-3 py-1.5 text-sm font-medium text-white border border-white/10 flex items-center gap-2`}>
                                <span class={`w-2 h-2 rounded-full ${getEventStatus().type === 'ended' ? 'bg-gray-300' :
                                        getEventStatus().type === 'ending-soon' ? 'bg-red-300' :
                                            getEventStatus().type === 'active' ? 'bg-green-300' :
                                                'bg-blue-300'
                                    }`}></span>
                                {getEventStatus().label}
                            </div>
                        </div>

                        {/* Participant Counter */}
                        <div class="absolute top-3 right-3 bg-black/30 backdrop-blur-md rounded-full px-3 py-1.5 text-sm font-medium text-white border border-white/10">
                            <div class="flex items-center gap-2">
                                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke-width="1.5" />
                                </svg>
                                <span>{props.currentParticipants}/{props.maxParticipants}</span>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div class="absolute inset-0 flex flex-col justify-end p-6">
                            <div class="space-y-4">
                                <div class="flex justify-between items-start">
                                    <h2 class="text-white text-2xl font-bold leading-tight group-hover:text-purple-400 transition-colors">
                                        {props.title}
                                    </h2>
                                    <span class="bg-purple-600/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                                        {props.type}
                                    </span>
                                </div>

                                <div class="space-y-3">
                                    {/* Progress Bar */}
                                    <div class="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                        <div
                                            class={`h-full rounded-full transition-all duration-300 ${isFull() ? 'bg-red-500' : 'bg-purple-500'
                                                }`}
                                            style={`width: ${participantPercentage}%`}
                                        />
                                    </div>

                                    <div class="flex justify-between items-center">
                                        <div class="flex flex-col">
                                            <span class="text-gray-400 text-sm">{props.date}</span>
                                            {isFull() && <span class="text-red-400 text-xs">Event is full</span>}
                                        </div>
                                        <button
                                            class={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${getEventStatus().type === 'ended'
                                                    ? 'bg-gray-600 cursor-not-allowed opacity-50'
                                                    : isFull()
                                                        ? 'bg-red-600 cursor-not-allowed'
                                                        : 'bg-purple-600 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/30'
                                                }`}
                                            disabled={getEventStatus().type === 'ended' || isFull()}
                                        >
                                            {getEventStatus().type === 'ended'
                                                ? 'ENDED'
                                                : isFull()
                                                    ? 'FULL'
                                                    : 'JOIN'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;