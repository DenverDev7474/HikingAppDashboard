import create from 'zustand';
// import axios from 'axios';

const useStore = create((set) => ({
    users: [],
    trails: [],
    events: [],
    eventParticipants: [],
    futureHikeEventsCounts: 0,
    pastHikeEventsCounts: 0,
    fetchUsers: async () => {
        try {
            const response = await fetch('http://localhost:3000/users');
            const users = await response.json();
            set({ users });
        } catch (error) {
            console.log(error);
        }
    },
    fetchTrails: async () => {
        try {
            const response = await fetch('http://localhost:3000/trails');
            const trails = await response.json();
            set({ trails });
        } catch (error) {
            console.log(error);
        }
    },
    fetchEvents: async () => {
        try {
            const response = await fetch('http://localhost:3000/events');
            const events = await response.json();
            set({ events });
        } catch (error) {
            console.log(error);
        }
    },
    fetchEventParticipants: async () => {
        try {
            const response = await fetch('http://localhost:3000/event_participants');
            const eventParticipants = await response.json();
            set({ eventParticipants });
        } catch (error) {
            console.log(error);
        }
    },
}));


export default useStore;