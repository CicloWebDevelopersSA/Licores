import HeaderC from '../components/Header';
import { licores } from '../data/data';
import LicoresCard from '../components/Licores/licores';
import showAdditional from '../components/App/Licores2';
import Footer from '../components/Footer';

function Lista() {
  return (
    <>
      <HeaderC />

      <br></br>
      <div className="Wrapper">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-dark me-md-2" type="button">
            Crear Producto
          </button>
        </div>
        <div className='wrapper'>
          <h1>Licores</h1>
          {licores.map(l => (
            <LicoresCard
              key={l.name}
              image={l.image}
              id={l.id}
              name={l.name}
              prise={l.prise}
              stock={l.stock}
              additional={l.additional}
              showAdditional={showAdditional}
            />
          ))}

        </div>
        <Footer />
      </div>
    </>
  );

}
export default Lista;