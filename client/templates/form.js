Template.form.events ({
  "click input[type=submit]": function (event) {
    
    var elhrLohr = 1.6;
    var elhrDhr = 0.4;
    var dhrLohr = 1.2;
    var ehrLohr = 0.1;
    var ehrElhr = 1.6;
    var ehrDhr = 1.2;

    var amt = 0;
    var loc = "";
    
    if ($(event.target).prop("id") == "submit") {
      
      if ($('#1').val() == 'null') {
            $('#total').text("Please choose a building for the Start!");
        } else if ($('#2').val() == 'null') {
            console.log("hi");
            $('#total').empty();
            $('#total').text("Please choose a building for Stop 1!");
        } else {
      for (i=1; i < $('#form :selected').length; i++) {

        if ((($('#' + i).val() == 'Elgin Hall') && ($('#' + (i + 1)).val() == 'Delaware Hall')) || (($('#' + i).val() == 'Delaware Hall') && ($('#' + (i + 1)).val() == 'Elgin Hall'))) {
          amt = amt + elhrDhr;
          loc = loc + $('#' + i).val() + " to " + $('#' + (i + 1)).val() + ", ";
        };
        if ((($('#' + i).val() == 'Elgin Hall') && ($('#' + (i + 1)).val() == 'London Hall')) || (($('#' + i).val() == 'London Hall') && ($('#' + (i + 1)).val() == 'Elgin Hall'))) {
          amt = amt + elhrLohr;
          loc = loc + $('#' + i).val() + " to " + $('#' + (i + 1)).val() + ", ";
        };
        if ((($('#' + i).val() == 'Delaware Hall') && ($('#' + (i + 1)).val() == 'London Hall')) || (($('#' + i).val() == 'London Hall') && ($('#' + (i + 1)).val() == 'Delaware Hall'))) {
          amt = amt + dhrLohr;
          loc = loc + $('#' + i).val() + " to " + $('#' + (i + 1)).val() + ", ";
        };
        if ((($('#' + i).val() == 'Essex Hall') && ($('#' + (i + 1)).val() == 'London Hall')) || (($('#' + i).val() == 'London Hall') && ($('#' + (i + 1)).val() == 'Essex Hall'))) {
          amt = amt + ehrLohr;
          loc = loc + $('#' + i).val() + " to " + $('#' + (i + 1)).val() + ", ";
        };
        if ((($('#' + i).val() == 'Essex Hall') && ($('#' + (i + 1)).val() == 'Elgin Hall')) || (($('#' + i).val() == 'Elgin Hall') && ($('#' + (i + 1)).val() == 'Essex Hall'))) {
          amt = amt + ehrElhr;
          loc = loc + $('#' + i).val() + " to " + $('#' + (i + 1)).val() + ", ";
        };
        if ((($('#' + i).val() == 'Essex Hall') && ($('#' + (i + 1)).val() == 'Delaware Hall')) || (($('#' + i).val() == 'Delaware Hall') && ($('#' + (i + 1)).val() == 'Essex Hall'))) {
          amt = amt + ehrDhr;
          loc = loc + $('#' + i).val() + " to " + $('#' + (i + 1)).val() + ", ";
        };      
        if (($('#' + i).val()) == ($('#' + (i + 1)).val())) { 
          amt;
          loc = loc + $('#' + i).val() + " to " + $('#' + (i + 1)).val() + ", ";
        };
      }
 
      $('#total').text("Total trip: " + amt.toFixed(1) + "km");
      document.getElementById('total').scrollIntoView({block: "end", behavior: "smooth"});
      Meteor.call('addTrip', amt.toFixed(1), loc);
      return false; 
    }
    } else if ($(event.target).prop("id") == "addStop") {
    var lastStop = ($("form select:last").attr("id"));
    var nextStop = parseInt(lastStop) + 1;
    nextStop = nextStop.toString();
    lastStop = lastStop.toString();
    $('<div class="form-group f' + nextStop + '"><label for=' + nextStop + '>Stop ' + lastStop + '</label><select id=' + nextStop + ' class="select form-control"><option disabled selected>---</option><option value="Delaware Hall">Delaware Hall</option><option value="Elgin Hall">Elgin Hall</option><option value="Essex Hall">Essex Hall</option><option value="London Hall">London Hall</option></select></div>').insertAfter(".f" + lastStop);
    $('#total').text("");
    return false; 
  } else if ($(event.target).prop("id") == "removeStop") {
    var lastStop = ($("form select:last").attr("id"));
    if (lastStop > 2) {
      $('.f' + lastStop).remove();
      return false;
    } else {
      $('#total').text("You need a Start and one destination...");
    }
    return false;
    }
    return false;
}
});
