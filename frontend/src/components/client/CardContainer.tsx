import type { Component } from 'solid-js';
import Card from './Card';
import Skeleton from './Skeleton';

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

interface CardContainerProps extends CardProps {
    loading: boolean;
}

const CardContainer: Component<CardContainerProps> = (props) => {
    return (
        <div class="relative group">
            {props.loading ? (
                <CardSkeleton />
            ) : (
                <Card 
                    title={props.title}
                    date={props.date}
                    type={props.type}
                    currentParticipants={props.currentParticipants}
                    maxParticipants={props.maxParticipants}
                    backgroundImage={props.backgroundImage}
                    endDate={props.endDate}
                    startDate={props.startDate}
                />
            )}
        </div>
    );
};

const CardSkeleton: Component = () => (
    <div class="bg-[#161B22] rounded-xl overflow-hidden relative aspect-[4/3]">
        {/* Background Skeleton */}
        <Skeleton class="absolute inset-0" height="100%" width="100%" />

        <div class="absolute inset-0 p-6 flex flex-col justify-between">
            {/* Top badges */}
            <div class="flex justify-between items-start">
                <Skeleton height={32} width={120} rounded="rounded-full" />
                <Skeleton height={32} width={80} rounded="rounded-full" />
            </div>

            {/* Title, Progress, and Action Button */}
            <div class="space-y-4">
                <Skeleton height={32} width={200} rounded="rounded-lg" />
                <Skeleton height={6} width="100%" rounded="rounded-full" />
                <div class="flex justify-between">
                    <Skeleton height={40} width={100} rounded="rounded-lg" />
                    <Skeleton height={40} width={100} rounded="rounded-lg" />
                </div>
            </div>
        </div>
    </div>
);

export default CardContainer;
