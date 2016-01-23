$(document).ready(function() {
    // Stack modal windows
    $(document).on('pw-modal-opened', function() {
        // console.log('modal opened');
        if(window !== top) { // The parent window is also a child window
            // console.log('Parent window is also a child window.');
            var $parentDoc = $(parent.document);
            var $parentIframe = $parentDoc.find('iframe.pw-modal-window');
            var $parentDialogWrapper = $parentIframe.closest('.ui-dialog');

            $parentDialogWrapper.addClass('modalception-full');


        }
    });
    $(document).on('pw-modal-closed', function() {
        if(window !== top) { // The parent window is also a child window
            var $parentDoc = $(parent.document);
            var $parentIframe = $parentDoc.find('iframe.pw-modal-window');
            var $parentDialogWrapper = $parentIframe.closest('.ui-dialog');

            $parentDialogWrapper.removeClass('modalception-full');
        }
    });

});