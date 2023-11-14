//import modules
// import accoms from "../Scripts/HouseABullPro.json" assert {'type': 'json'};
const accoms = [
    {
        "DistancefromCollege": 2,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "3BHK",
        "TypesofAmenities": "Swimming Pool, Club House",
        "AccommodationName": "Cambridge Woods Dr",
        "Rent": 2300,
        "AvailabilityMonth": "July"
    },
    {
        "DistancefromCollege": 2,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "2BHK",
        "TypesofAmenities": "Swimming Pool, Club House",
        "AccommodationName": "Cambridge Woods Dr",
        "Rent": 1900,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 2,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "1BHK",
        "TypesofAmenities": "Swimming Pool, Club House",
        "AccommodationName": "Cambridge Woods Dr",
        "Rent": 1560,
        "AvailabilityMonth": "July"
    },
    {
        "DistancefromCollege": 1.5,
        "Furnished": "Yes",
        "PetsAllowed": "No",
        "TypesofHouses": "Single",
        "TypesofAmenities": "Club House",
        "AccommodationName": "Lark",
        "Rent": 1100,
        "AvailabilityMonth": "January"
    },
    {
        "DistancefromCollege": 1.5,
        "Furnished": "Yes",
        "PetsAllowed": "Yes",
        "TypesofHouses": "Single",
        "TypesofAmenities": "Swimming Pool, Club House",
        "AccommodationName": "Station42",
        "Rent": 915,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 1.5,
        "Furnished": "Yes",
        "PetsAllowed": "No",
        "TypesofHouses": "Single",
        "TypesofAmenities": "Club House",
        "AccommodationName": "40 Fifty Lofts",
        "Rent": 900,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 2.5,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "3BHK",
        "TypesofAmenities": "Swimming Pool, Club House",
        "AccommodationName": "Sunstone Palms",
        "Rent": 2600,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 2.5,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "2BHK",
        "TypesofAmenities": "Swimming Pool, Club House",
        "AccommodationName": "Sunstone Palms",
        "Rent": 1800,
        "AvailabilityMonth": "July"
    },
    {
        "DistancefromCollege": 2.5,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "1BHK",
        "TypesofAmenities": "Swimming Pool, Club House",
        "AccommodationName": "Sunstone Palms",
        "Rent": 1250,
        "AvailabilityMonth": "July"
    },
    {
        "DistancefromCollege": 3.5,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "3BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Carlton Arms North",
        "Rent": 2100,
        "AvailabilityMonth": "January"
    },
    {
        "DistancefromCollege": 3.5,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "2BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Carlton Arms North",
        "Rent": 1600,
        "AvailabilityMonth": "January"
    },
    {
        "DistancefromCollege": 3.5,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "1BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Carlton Arms North",
        "Rent": 1150,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 2,
        "Furnished": "Yes",
        "PetsAllowed": "No",
        "TypesofHouses": "Single",
        "TypesofAmenities": "Club House",
        "AccommodationName": "42North",
        "Rent": 850,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 1.75,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "3BHK",
        "TypesofAmenities": "NA",
        "AccommodationName": "Ashford Green PL",
        "Rent": 2300,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 1.75,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "2BHK",
        "TypesofAmenities": "NA",
        "AccommodationName": "Ashford Green PL",
        "Rent": 1650,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 1.75,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "1BHK",
        "TypesofAmenities": "NA",
        "AccommodationName": "Ashford Green PL",
        "Rent": 1000,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 0.5,
        "Furnished": "Yes",
        "PetsAllowed": "No",
        "TypesofHouses": "Single",
        "TypesofAmenities": "Swimming Pool, Club House",
        "AccommodationName": "Avalon Heights",
        "Rent": 1000,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 0.5,
        "Furnished": "Yes",
        "PetsAllowed": "No",
        "TypesofHouses": "3BHK",
        "TypesofAmenities": "Club House",
        "AccommodationName": "Flats at 42",
        "Rent": 2400,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 0.5,
        "Furnished": "Yes",
        "PetsAllowed": "No",
        "TypesofHouses": "2BHK",
        "TypesofAmenities": "Club House",
        "AccommodationName": "Flats at 42",
        "Rent": 2000,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 0.5,
        "Furnished": "Yes",
        "PetsAllowed": "No",
        "TypesofHouses": "1BHK",
        "TypesofAmenities": "Club House",
        "AccommodationName": "Flats at 42",
        "Rent": 1100,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 1,
        "Furnished": "Yes",
        "PetsAllowed": "No",
        "TypesofHouses": "3BHK",
        "TypesofAmenities": "Swimming Pool, Club House",
        "AccommodationName": "The Venue",
        "Rent": 3000,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 1,
        "Furnished": "Yes",
        "PetsAllowed": "No",
        "TypesofHouses": "2BHK",
        "TypesofAmenities": "Swimming Pool, Club House",
        "AccommodationName": "The Venue",
        "Rent": 2400,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 1,
        "Furnished": "Yes",
        "PetsAllowed": "No",
        "TypesofHouses": "1BHK",
        "TypesofAmenities": "Swimming Pool, Club House",
        "AccommodationName": "The Venue",
        "Rent": 1500,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 2.5,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "3BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Armature",
        "Rent": 2200,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 2.5,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "2BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Armature",
        "Rent": 1600,
        "AvailabilityMonth": "July"
    },
    {
        "DistancefromCollege": 2.5,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "1BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Armature",
        "Rent": 1050,
        "AvailabilityMonth": "January"
    },
    {
        "DistancefromCollege": 2.5,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "3BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Lake View Oaks",
        "Rent": 2700,
        "AvailabilityMonth": "January"
    },
    {
        "DistancefromCollege": 2.5,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "2BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Lake View Oaks",
        "Rent": 2100,
        "AvailabilityMonth": "January"
    },
    {
        "DistancefromCollege": 2.5,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "1BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Lake View Oaks",
        "Rent": 1600,
        "AvailabilityMonth": "July"
    },
    {
        "DistancefromCollege": 3,
        "Furnished": "No",
        "PetsAllowed": "No",
        "TypesofHouses": "3BHK",
        "TypesofAmenities": "Club House",
        "AccommodationName": "The Ivy",
        "Rent": 2400,
        "AvailabilityMonth": "July"
    },
    {
        "DistancefromCollege": 3,
        "Furnished": "No",
        "PetsAllowed": "No",
        "TypesofHouses": "2BHK",
        "TypesofAmenities": "Club House",
        "AccommodationName": "The Ivy",
        "Rent": 1800,
        "AvailabilityMonth": "July"
    },
    {
        "DistancefromCollege": 3,
        "Furnished": "No",
        "PetsAllowed": "No",
        "TypesofHouses": "1BHK",
        "TypesofAmenities": "Club House",
        "AccommodationName": "The Ivy",
        "Rent": 1400,
        "AvailabilityMonth": "January"
    },
    {
        "DistancefromCollege": 7,
        "Furnished": "Yes",
        "PetsAllowed": "No",
        "TypesofHouses": "3BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Campus Palms",
        "Rent": 2000,
        "AvailabilityMonth": "January"
    },
    {
        "DistancefromCollege": 7,
        "Furnished": "Yes",
        "PetsAllowed": "No",
        "TypesofHouses": "2BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Campus Palms",
        "Rent": 1500,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 7,
        "Furnished": "Yes",
        "PetsAllowed": "No",
        "TypesofHouses": "1BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Campus Palms",
        "Rent": 800,
        "AvailabilityMonth": "January"
    },
    {
        "DistancefromCollege": 6,
        "Furnished": "Yes",
        "PetsAllowed": "Yes",
        "TypesofHouses": "3BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Tampa Palms",
        "Rent": 3000,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 6,
        "Furnished": "Yes",
        "PetsAllowed": "Yes",
        "TypesofHouses": "2BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Tampa Palms",
        "Rent": 2400,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 6,
        "Furnished": "Yes",
        "PetsAllowed": "Yes",
        "TypesofHouses": "1BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Tampa Palms",
        "Rent": 1600,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 5,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "3BHK",
        "TypesofAmenities": "Club House",
        "AccommodationName": "Amberly Place",
        "Rent": 1500,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 5,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "2BHK",
        "TypesofAmenities": "Club House",
        "AccommodationName": "Amberly Place",
        "Rent": 1200,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 5,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "1BHK",
        "TypesofAmenities": "Club House",
        "AccommodationName": "Amberly Place",
        "Rent": 600,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 3,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "3BHK",
        "TypesofAmenities": "Swimming Pool, Club House",
        "AccommodationName": "Willow Brooke",
        "Rent": 2100,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 3,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "2BHK",
        "TypesofAmenities": "Swimming Pool, Club House",
        "AccommodationName": "Willow Brooke",
        "Rent": 1500,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 3,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "1BHK",
        "TypesofAmenities": "Swimming Pool, Club House",
        "AccommodationName": "Willow Brooke",
        "Rent": 950,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 2,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "3BHK",
        "TypesofAmenities": "NA",
        "AccommodationName": "Bavarian Oaks",
        "Rent": 2100,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 2,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "2BHK",
        "TypesofAmenities": "NA",
        "AccommodationName": "Bavarian Oaks",
        "Rent": 1400,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 2,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "1BHK",
        "TypesofAmenities": "NA",
        "AccommodationName": "Bavarian Oaks",
        "Rent": 700,
        "AvailabilityMonth": "July"
    },
    {
        "DistancefromCollege": 1.5,
        "Furnished": "Yes",
        "PetsAllowed": "No",
        "TypesofHouses": "Single",
        "TypesofAmenities": "Club House",
        "AccommodationName": "College Town",
        "Rent": 850,
        "AvailabilityMonth": "July"
    },
    {
        "DistancefromCollege": 2,
        "Furnished": "Yes",
        "PetsAllowed": "No",
        "TypesofHouses": "Single",
        "TypesofAmenities": "Club House",
        "AccommodationName": "The Standard",
        "Rent": 1200,
        "AvailabilityMonth": "July"
    },
    {
        "DistancefromCollege": 1.5,
        "Furnished": "Yes",
        "PetsAllowed": "No",
        "TypesofHouses": "Single",
        "TypesofAmenities": "Club House",
        "AccommodationName": "The Hub",
        "Rent": 1000,
        "AvailabilityMonth": "July"
    },
    {
        "DistancefromCollege": 2,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "3BHK",
        "TypesofAmenities": "Club House",
        "AccommodationName": "Oak Ramble",
        "Rent": 2100,
        "AvailabilityMonth": "January"
    },
    {
        "DistancefromCollege": 2,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "2BHK",
        "TypesofAmenities": "Club House",
        "AccommodationName": "Oak Ramble",
        "Rent": 1700,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 2,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "1BHK",
        "TypesofAmenities": "Club House",
        "AccommodationName": "Oak Ramble",
        "Rent": 1100,
        "AvailabilityMonth": "January"
    },
    {
        "DistancefromCollege": 2.5,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "3BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Eagles Point",
        "Rent": 2400,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 2.5,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "2BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Eagles Point",
        "Rent": 1900,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 2.5,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "1BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Eagles Point",
        "Rent": 1300,
        "AvailabilityMonth": "January"
    },
    {
        "DistancefromCollege": 2,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "3BHK",
        "TypesofAmenities": "NA",
        "AccommodationName": "Oaks Condominiums",
        "Rent": 2050,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 2,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "2BHK",
        "TypesofAmenities": "NA",
        "AccommodationName": "Oaks Condominiums",
        "Rent": 1550,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 2,
        "Furnished": "Yes",
        "PetsAllowed": "Yes",
        "TypesofHouses": "1BHK",
        "TypesofAmenities": "NA",
        "AccommodationName": "Oaks Condominiums",
        "Rent": 1050,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 5,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "3BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "The Preserve Gateway",
        "Rent": 2200,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 5,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "2BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "The Preserve Gateway",
        "Rent": 1600,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 5,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "1BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "The Preserve Gateway",
        "Rent": 1100,
        "AvailabilityMonth": "September"
    },
    {
        "DistancefromCollege": 4.5,
        "Furnished": "Yes",
        "PetsAllowed": "Yes",
        "TypesofHouses": "2BHK",
        "TypesofAmenities": "Swimming Pool, Club House",
        "AccommodationName": "Vintage Lofts",
        "Rent": 1800,
        "AvailabilityMonth": "September"
    },
    {
        "DistancefromCollege": 4.5,
        "Furnished": "Yes",
        "PetsAllowed": "Yes",
        "TypesofHouses": "1BHK",
        "TypesofAmenities": "Swimming Pool, Club House",
        "AccommodationName": "Vintage Lofts",
        "Rent": 1400,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 4.5,
        "Furnished": "Yes",
        "PetsAllowed": "Yes",
        "TypesofHouses": "3BHK",
        "TypesofAmenities": "Swimming Pool, Club House",
        "AccommodationName": "Vintage Lofts",
        "Rent": 2300,
        "AvailabilityMonth": "July"
    },
    {
        "DistancefromCollege": 5,
        "Furnished": "Yes",
        "PetsAllowed": "Yes",
        "TypesofHouses": "1BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Summit West",
        "Rent": 1200,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 5,
        "Furnished": "Yes",
        "PetsAllowed": "Yes",
        "TypesofHouses": "3BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Summit West",
        "Rent": 2400,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 5,
        "Furnished": "Yes",
        "PetsAllowed": "Yes",
        "TypesofHouses": "2BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Summit West",
        "Rent": 1600,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 3.5,
        "Furnished": "Yes",
        "PetsAllowed": "Yes",
        "TypesofHouses": "3BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Lakewood Place",
        "Rent": 2200,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 3.5,
        "Furnished": "Yes",
        "PetsAllowed": "No",
        "TypesofHouses": "2BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Lakewood Place",
        "Rent": 1400,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 3.5,
        "Furnished": "Yes",
        "PetsAllowed": "No",
        "TypesofHouses": "1BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Lakewood Place",
        "Rent": 1000,
        "AvailabilityMonth": "July"
    },
    {
        "DistancefromCollege": 7,
        "Furnished": "Yes",
        "PetsAllowed": "No",
        "TypesofHouses": "3BHK",
        "TypesofAmenities": "Swimming Pool, Club House",
        "AccommodationName": "101 N Meridian",
        "Rent": 2700,
        "AvailabilityMonth": "January"
    },
    {
        "DistancefromCollege": 7,
        "Furnished": "Yes",
        "PetsAllowed": "Yes",
        "TypesofHouses": "2BHK",
        "TypesofAmenities": "Swimming Pool, Club House",
        "AccommodationName": "101 N Meridian",
        "Rent": 2500,
        "AvailabilityMonth": "January"
    },
    {
        "DistancefromCollege": 7,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "1BHK",
        "TypesofAmenities": "Swimming Pool, Club House",
        "AccommodationName": "101 N Meridian",
        "Rent": 1500,
        "AvailabilityMonth": "January"
    },
    {
        "DistancefromCollege": 5,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "3BHK",
        "TypesofAmenities": "NA",
        "AccommodationName": "The Slade",
        "Rent": 2100,
        "AvailabilityMonth": "July"
    },
    {
        "DistancefromCollege": 5,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "2BHK",
        "TypesofAmenities": "NA",
        "AccommodationName": "The Slade",
        "Rent": 1500,
        "AvailabilityMonth": "July"
    },
    {
        "DistancefromCollege": 5,
        "Furnished": "Yes",
        "PetsAllowed": "Yes",
        "TypesofHouses": "1BHK",
        "TypesofAmenities": "NA",
        "AccommodationName": "The Slade",
        "Rent": 1200,
        "AvailabilityMonth": "July"
    },
    {
        "DistancefromCollege": 2.5,
        "Furnished": "Yes",
        "PetsAllowed": "Yes",
        "TypesofHouses": "2BHK",
        "TypesofAmenities": "Club House",
        "AccommodationName": "Andover Place",
        "Rent": 1700,
        "AvailabilityMonth": "January"
    },
    {
        "DistancefromCollege": 2.5,
        "Furnished": "Yes",
        "PetsAllowed": "Yes",
        "TypesofHouses": "1BHK",
        "TypesofAmenities": "Club House",
        "AccommodationName": "Andover Place",
        "Rent": 1300,
        "AvailabilityMonth": "January"
    },
    {
        "DistancefromCollege": 2.5,
        "Furnished": "Yes",
        "PetsAllowed": "Yes",
        "TypesofHouses": "3BHK",
        "TypesofAmenities": "Club House",
        "AccommodationName": "Andover Place",
        "Rent": 2200,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 1.5,
        "Furnished": "Yes",
        "PetsAllowed": "Yes",
        "TypesofHouses": "Single",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Peridot Palms",
        "Rent": 1990,
        "AvailabilityMonth": "January"
    },
    {
        "DistancefromCollege": 4.5,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "3BHK",
        "TypesofAmenities": "Swimming Pool, Club House",
        "AccommodationName": "Inlet Bay ",
        "Rent": 2300,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 4.5,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "2BHK",
        "TypesofAmenities": "Swimming Pool, Club House",
        "AccommodationName": "Inlet Bay ",
        "Rent": 1900,
        "AvailabilityMonth": "June"
    },
    {
        "DistancefromCollege": 4.5,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "1BHK",
        "TypesofAmenities": "Swimming Pool, Club House",
        "AccommodationName": "Inlet Bay ",
        "Rent": 1500,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 4,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "3BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "The Breyley Apartments",
        "Rent": 2800,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 4,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "2BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "The Breyley Apartments",
        "Rent": 2500,
        "AvailabilityMonth": "July"
    },
    {
        "DistancefromCollege": 4,
        "Furnished": "No",
        "PetsAllowed": "Yes",
        "TypesofHouses": "1BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "The Breyley Apartments",
        "Rent": 2000,
        "AvailabilityMonth": "July"
    },
    {
        "DistancefromCollege": 7.5,
        "Furnished": "No",
        "PetsAllowed": "No",
        "TypesofHouses": "3BHK",
        "TypesofAmenities": "Swimming Pool, Club House",
        "AccommodationName": "Ashton ",
        "Rent": 1990,
        "AvailabilityMonth": "July"
    },
    {
        "DistancefromCollege": 7.5,
        "Furnished": "No",
        "PetsAllowed": "No",
        "TypesofHouses": "2BHK",
        "TypesofAmenities": "Swimming Pool, Club House",
        "AccommodationName": "Ashton ",
        "Rent": 1300,
        "AvailabilityMonth": "January"
    },
    {
        "DistancefromCollege": 7.5,
        "Furnished": "No",
        "PetsAllowed": "No",
        "TypesofHouses": "1BHK",
        "TypesofAmenities": "Swimming Pool, Club House",
        "AccommodationName": "Ashton ",
        "Rent": 800,
        "AvailabilityMonth": "January"
    },
    {
        "DistancefromCollege": 3,
        "Furnished": "Yes",
        "PetsAllowed": "Yes",
        "TypesofHouses": "Single",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Lotus Landing",
        "Rent": 2000,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 2.5,
        "Furnished": "Yes",
        "PetsAllowed": "Yes",
        "TypesofHouses": "Single",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Essex Luxe Apartments",
        "Rent": 2400,
        "AvailabilityMonth": "January"
    },
    {
        "DistancefromCollege": 3.5,
        "Furnished": "Yes",
        "PetsAllowed": "Yes",
        "TypesofHouses": "1BHK",
        "TypesofAmenities": "Swimming Pool, Club House",
        "AccommodationName": "Barton Creek Landing",
        "Rent": 1300,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 3.5,
        "Furnished": "Yes",
        "PetsAllowed": "Yes",
        "TypesofHouses": "3BHK",
        "TypesofAmenities": "Swimming Pool, Club House",
        "AccommodationName": "Barton Creek Landing",
        "Rent": 2200,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 3.5,
        "Furnished": "Yes",
        "PetsAllowed": "Yes",
        "TypesofHouses": "2BHK",
        "TypesofAmenities": "Swimming Pool, Club House",
        "AccommodationName": "Barton Creek Landing",
        "Rent": 1900,
        "AvailabilityMonth": "June"
    },
    {
        "DistancefromCollege": 2,
        "Furnished": "Yes",
        "PetsAllowed": "Yes",
        "TypesofHouses": "Single",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Alafaya Woods",
        "Rent": 3000,
        "AvailabilityMonth": "August"
    },
    {
        "DistancefromCollege": 1,
        "Furnished": "Yes",
        "PetsAllowed": "Yes",
        "TypesofHouses": "3BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Arbors",
        "Rent": 2700,
        "AvailabilityMonth": "July"
    },
    {
        "DistancefromCollege": 1,
        "Furnished": "Yes",
        "PetsAllowed": "Yes",
        "TypesofHouses": "2BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Arbors",
        "Rent": 2200,
        "AvailabilityMonth": "July"
    },
    {
        "DistancefromCollege": 1,
        "Furnished": "Yes",
        "PetsAllowed": "Yes",
        "TypesofHouses": "1BHK",
        "TypesofAmenities": "Swimming Pool, Club House, Play Ground",
        "AccommodationName": "Arbors",
        "Rent": 1700,
        "AvailabilityMonth": "July"
    }
];

// get data on search click
document.getElementById('getDataSubmit').addEventListener('click', () => {
    dispHideDataSection("d-none", "d-none", "d-none");  // hide all blocks
    loadfilteredData();
});


// load filtered data
function loadfilteredData() {
    // Get data from search box
    let searchData = document.getElementById('search').value;
    // filter data with given value
    let dispData = accoms.filter((e) => {
        if (searchData == "") {
            return;
        } else if (e.AccommodationName.toLowerCase().startsWith(searchData.toLowerCase())) {
            return e;
        }
    });

    // if data is present then display table
    if (searchData === "") {
        sendAlert("Please enter data in Search Box!");
    } else {
        if (dispData.length > 0) {
            loadSpinner("yes");    // load spinner ON
            let output = '';
            dispData.forEach((thisRecord) => {
                output +=
                    `<tr>
                            <td>${thisRecord.AccommodationName}</td>
                            <td>${thisRecord.PetsAllowed}</td>
                            <td>${thisRecord.TypesofHouses}</td>
                            <td>${thisRecord.TypesofAmenities}</td>
                            <td>$${thisRecord.Rent}</td>
                            <td>${thisRecord.AvailabilityMonth}</td>
                            <td>${thisRecord.DistancefromCollege}</td>
                        </tr>`
            });
            document.getElementById('tableBodyData').innerHTML = output;
            visualizeData(dispData);    // get bar chart of data
            setTimeout(() => {
                loadSpinner("no");    // load spinner OFF
                dispHideDataSection("d-block", "d-block", "d-none");    // display data section and table
            }, 2000);
        }
        else {
            loadSpinner("yes");     // load spinner ON
            setTimeout(() => {
                loadSpinner("no");    // load spinner OFF
                dispHideDataSection("d-block", "d-none", "d-block");    // display data section and message
            }, 2000);
        }
    }
}

let myChart = null;

// data chart
function visualizeData(dispData) {
    // get proper data
    let accomNames = [];
    Object.entries(dispData).forEach((item) => {
        accomNames = accomNames.concat(item[1].AccommodationName);
    });
    // remove duplicates in accomNames
    let accomNamesUniq = accomNames.filter((item, index) => accomNames.indexOf(item) === index);

    // get avg rent values
    let rentVals = [];
    accomNamesUniq.forEach((eachName) => {
        let ac = dispData.filter((item) => {
            if (item.AccommodationName == eachName) {
                return item;
            }
        });
        let ren = 0;
        let len = 0;
        Object.entries(ac).forEach((item) => {
            ren += item[1].Rent;
            len++;
        })
        rentVals = rentVals.concat(ren / len);
    });


    // bar chart
    const ctx = document.getElementById('myChart').getContext('2d');
    if(myChart != null){
        myChart.destroy();
    }
    myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
            labels: accomNamesUniq,
            datasets: [{
                label: 'Avg. Rent of an Accommodation',
                data: rentVals,
                backgroundColor: ['rgba(43, 10, 255, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: "Avg. Rent per Accommodation",
                    fullSize: true,
                    color: 'black'
                }
            }
        }
    });
}


// UI Elements
// send alert
function sendAlert(msg) {
    alert(msg);
}

// display or hide data section
function dispHideDataSection(dSec, dTableSec, dMessage) {
    document.getElementById('data-disp-section').setAttribute("class", dSec);
    document.getElementById('dataTable').setAttribute("class", dTableSec);
    document.getElementById('message').setAttribute("class", dMessage);
}

// loading spinner
function loadSpinner(val) {
    if (val == "yes") {
        document.getElementById('spinnerId').style.display = "block";    // load spinner ON
    } else {
        document.getElementById('spinnerId').style.display = "none";    // load spinner ON
    }
}


// data
