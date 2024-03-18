interface CampusHostel {
    hostel: string;
    roomNumber: string | number;
}

interface OffCampus {
    district: string;
    sector: string;
    cell: string;
    village: string;
}

export interface Accommodation {
    campusHostel?: CampusHostel;
    offCampus?: OffCampus;
}