export const showModal = (actionClassname, nodeClassname) => {
    const btn = document.querySelector(actionClassname);
    const modal = document.querySelector(nodeClassname);
    btn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        document.addEventListener('click', modalClickOverlayHandler);
    });
    const modalClickOverlayHandler = (evt) => {
        console.log(evt.target.classList.contains('modal__overlay'))
        if (evt.target.classList.contains('modal__overlay')) {
            hideModal(nodeClassname);
            document.removeEventListener('click', modalClickOverlayHandler);
        }
    }
}
export const hideModal = (nodeClassname) => {
    const modal = document.querySelector(nodeClassname);
    modal.classList.add('hidden');
}

