import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({ onAddProject, onCancel }) {
  const modal = useRef();

  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const dueDateInputRef = useRef();

  function handleSave() {
    const title = titleInputRef.current.value;
    const description = descriptionInputRef.current.value;
    const dueDate = dueDateInputRef.current.value;

    if (
      title.trim() === "" ||
      description.trim() === "" ||
      dueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAddProject({ title, description, dueDate });
  }

  return (
    <>
      <Modal modalRef={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 mt-4 my-4">
          Invalid Input
        </h2>
        <p className="text-stone-600 mb-4">
          Ooops...looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600">Please fill in all fields.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={titleInputRef} label="Title" />
          <Input ref={descriptionInputRef} label="Description" isTextArea />
          <Input type="date" ref={dueDateInputRef} label="Due Date" />
        </div>
      </div>
    </>
  );
}
