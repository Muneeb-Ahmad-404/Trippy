import TripData from "./TripData";
import Trip1 from "../assets/5.jpg"
import Trip3 from "../assets/6.jpg"
import Trip2 from "../assets/8.jpg"

export default function Trip() {
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="trip-card">
                <TripData
                    image={Trip1}
                    heading="Trip in Indonesia"
                    text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
                />
                <TripData
                    image={Trip2}
                    heading="Trip in Malaysia"
                    text="Mo kiysio is a Scutheast asian country and the island of Borneo. It's known for its beaches, rainforests and mix of Malgy. Chirise, Indian and European culturol influences"
                /><TripData
                    image={Trip3}
                    heading="Trip in France"
                    text="France, in Western Europe, encompasses medieval cities, olpine viliages ond Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments ike the Eiffel Tower."
                />
            </div>
        </div>
    )
}