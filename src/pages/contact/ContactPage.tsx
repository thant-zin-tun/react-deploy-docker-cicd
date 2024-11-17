
import Modal from "../../components/modal";

// const Modal = lazy(() => import("../../components/modal"));

const ContactPage = () => {
    // const [open,setOpen] = useState<boolean>(false);
  return (
    <div className="contact">
        <h4>ContactPage</h4>
        <button>Change</button>
        {/* {
            open && <Suspense fallback={<p>Modal Loading....</p>}> */}
            <Modal />
        {/* </Suspense> 
        } */}
        
    </div>
  )
}

export default ContactPage