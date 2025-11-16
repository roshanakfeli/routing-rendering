import { useRouter } from "next/navigation";

const ModalBackdrop = () => {
  const route = useRouter();

  return <div className="modal-backdrop" onClick={route.back} />;
};

export default ModalBackdrop;
