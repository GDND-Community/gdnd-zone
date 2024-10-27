import { createSignal, For } from 'solid-js';
import type { Component } from 'solid-js';
import Card from './Card';

interface CardData {
  id: string;
  title: string;
  date: string;
  type: string;
  currentParticipants: number;
  maxParticipants: number;
  backgroundImage: string;
  startDate: string;
  endDate: string;
}

const CardList: Component = () => {
  const [cards] = createSignal<CardData[]>([
    {
      id: '1',
      title: 'UE5',
      date: '8 Jan 2024',
      type: 'Workshop',
      currentParticipants: 156,
      maxParticipants: 200,
      backgroundImage: '/ue5.png',
      startDate: '2024-01-08T00:00:00',
      endDate: '2024-01-15T00:00:00'
    },
    {
      id: '2',
      title: 'Hackathon',
      date: '15 Jan 2024',
      type: 'HACKATHON',
      currentParticipants: 150,
      maxParticipants: 150,
      backgroundImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
      startDate: '2024-01-15T00:00:00',
      endDate: '2024-01-22T00:00:00'
    },
    {
      id: '3',
      title: 'Game Jam 2025',
      date: '25 MAY 2025',
      type: 'GAMEJAM',
      currentParticipants: 42,
      maxParticipants: 100,
      backgroundImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
      startDate: '2025-01-22T00:00:00',
      endDate: '2025-01-29T00:00:00'
    }
  ]);

  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
      <For each={cards()}>
        {(card) => (
          <Card {...card} />
        )}
      </For>
    </div>
  );
};

export default CardList;