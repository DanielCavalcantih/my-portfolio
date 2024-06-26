export default function HardItem({ item }) {
  return (
    <li data-aos="zoom-in" data-aos-duration="800" data-aos-delay="500">
      <img src={item.img} alt={item.name} width="60px" />
      <span className="hard-name">{item.name}</span>
    </li>
  );
}
