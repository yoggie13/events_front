import api from "./api";

export default class location_services {

    static getLocations = async () => {
        return await api.get('locations');
    }
    static addNewLocation = async (data) => {
        return await api.post('locations?link=' + data)
    }
}