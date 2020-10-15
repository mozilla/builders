(function() {
    'use strict';

    var closeButton = document.querySelector('.js-fti-launch-close');
    var ftiModal = document.querySelector('.fti-launch');

    function hideModal() {
      ftiModal.classList.add('hidden');
      document.body.removeEventListener("mousedown", hideModal, true);
      document.body.removeEventListener('keydown', keyPressHandler);
    }

    function keyPressHandler(e) {
      if (e.key == "Escape") {
        hideModal();
      }
    }

    // Add listeners to close button and esc key
    closeButton.addEventListener('click', hideModal);
    document.body.addEventListener('keydown', keyPressHandler);

})();
