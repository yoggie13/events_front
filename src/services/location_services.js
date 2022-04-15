import api from "./api";

export default class location_services {

    static getLocations = async () => {
        return await api.get('locations');
    }
    static addNewLocations = async (data) => {
        return await api.post('locations/' + data)
    }
}