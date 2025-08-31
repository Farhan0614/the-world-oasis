import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add New Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );

  // const [isOpenModel, setIsOpenModel] = useState(false);
  // return (
  //   <div>
  //     <Button onClick={() => setIsOpenModel((show) => !show)}>
  //       Add new Cabin
  //     </Button>
  //     {isOpenModel && (
  //       <Modal onClose={() => setIsOpenModel(false)}>
  //         <CreateCabinForm onCloseModel={() => setIsOpenModel(false)} />
  //       </Modal>
  //     )}
  //   </div>
  // );
}

export default AddCabin;
