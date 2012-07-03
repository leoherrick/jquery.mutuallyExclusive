$.fn.mutuallyExclusive = function() {
    var $all_selects = this; // We'll keep around a reference to the collection of select elements

    // Right off the bat, store an original copy of all options in each select element
    $all_selects.each(function() {
        $(this).data('original_option_list', $(this).find('option'));
    });

    // This function takes care of updating the state of each select element appropriately
    // based on the options selected in the other select elements.
    function updateSelectElements() {

        // For each select element
        $all_selects.each(function() {

            // Create a collection of all the other select elements
            var $other_selects = $all_selects.not($(this));

            // For each of the other select elements
            $other_selects.each(function() {

                var $select = $(this);

                // Keep a record of what option is currently selected
                var currently_selected_val = $select.find('option:selected').val();

                // This is a collection of all the other options selected in the other select elements
                var $siblings_selected_options = $all_selects.not($select).find('option:selected');

                // Load the original, complete options list back into this select element
                $select.html($select.data('original_option_list'));

                // Now that we reloaded the original options, lets reselect the option that was previously selected
                $select.find('option[value="' + currently_selected_val + '"]').attr("selected", "selected");

                // Finally, remove the options that have been selected in the other select elements and we're all set!
                $siblings_selected_options.each(function() {
                    if ($(this).val() != "") {
                        $select.find('option[value="' + $(this).val() + '"]').remove();
                    }
                });

                // Rebuild the Chosen dropdowns after modifying select options.
                $select.trigger("liszt:updated");
            });
        });
    }

    // We need to always run this function to properly initialize the state of all the
    // select elements.
    updateSelectElements();

    // We'll register an event listener that will update the select fields whenever a selected
    // option in changed in a select element.
    $(this).change(function() {
        updateSelectElements();
    });
};