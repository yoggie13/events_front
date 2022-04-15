import api from "./api";

export default class event_services {
    static getEvents = async () => {
        return await api.get('events')
    }

    static getEventsWithParam = async (param) => {
        return await api.get('events?filter=' + param)
    }
}