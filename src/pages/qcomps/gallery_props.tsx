interface Scientist {
  name: string;
  imageUrl: string;
  imageAlt: string;
  profession: string;
  awards: string[];
  discoveries: string
}

function Profile(scientist: Scientist) {
  return (
      <section className="profile">
        <h2>{scientist.name}</h2>
        <img
            className="avatar"
            src={scientist.imageUrl}
            alt={scientist.imageAlt}
            width={70}
            height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {scientist.profession}
          </li>
          <li>
            <b>Awards: </b>
            {scientist.awards.length} ({scientist.awards.join(", ")})
          </li>
          <li>
            <b>Discovered: </b>
            {scientist.discoveries}
          </li>
        </ul>
      </section>
  );
}

export default function Gallery() {
  return (
      <div>
        <h1>Notable Scientists</h1>
        <Profile
            name="Maria Skłodowska-Curie"
            imageUrl="https://i.imgur.com/szV5sdGs.jpg"
            imageAlt="Maria Skłodowska-Curie"
            profession="physicist and chemist"
            awards={["Nobel Prize in Physics", "Nobel Prize in Chemistry", "Davy Medal", "Matteucci Medal"]}
            discoveries="polonium (element)"
        />
        <Profile
            name="Katsuko Saruhashi"
            imageUrl="https://i.imgur.com/YfeOqp2s.jpg"
            imageAlt="Katsuko Saruhashi"
            profession="geochemist"
            awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
            discoveries="a method for measuring carbon dioxide in seawater"
        />
      </div>
  );
}