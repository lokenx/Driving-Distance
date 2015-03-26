Template.form.events ({
  "click input[type=submit]": function (event) {
    // Current Buildings: Delaware Hall, Elgin Hall, Essex Hall, Lambton Hall, London Hall
    
    var elhrLohr = 1.6;
    var elhrDhr = 0.4;
    var dhrLohr = 1.2;
    var ehrLohr = 0.1;
    var ehrElhr = 1.6;
    var ehrDhr = 1.2;
    var elhrLahr = 1.7;
    var ehrLahr = 1.5;
    var dhrLahr = 1.2;
    var lohrLahr = 1.5;
    var elhrUcc = 1.1;
    var dhrUcc = 0.8;
    var lahrUcc = 0.5;
    var lohrUcc = 1.2;
    var ehrUcc = 1.2;

    var amt = 0;
    var loc = "";
    
    if ($(event.target).prop("id") == "submit") {
      
      if ($('#1').val() == 'null') {
            $('#total').text("Please choose a building for the Start location!");
            document.getElementById('total').scrollIntoView({block: "end", behavior: "smooth"});
        } else if ($('#2').val() == 'null') {
            $('#total').empty();
            $('#total').text("Please choose a building for Stop 1!");
            document.getElementById('total').scrollIntoView({block: "end", behavior: "smooth"});
        } else {
      for (i=1; i < $('#form :selected').length; i++) {

        if ((($('#' + i).val() == 'Elgin Hall') && ($('#' + (i + 1)).val() == 'Delaware Hall')) || (($('#' + i).val() == 'Delaware Hall') && ($('#' + (i + 1)).val() == 'Elgin Hall'))) {
          amt = amt + elhrDhr;
          if ($('#' + i).attr('id') == '1') {
          loc = loc + $('#' + i).val() + " to " + $('#' + (i + 1)).val();
          } else {
            loc = loc + " to " + $('#' + (i + 1)).val();
          }
        };
        if ((($('#' + i).val() == 'Elgin Hall') && ($('#' + (i + 1)).val() == 'London Hall')) || (($('#' + i).val() == 'London Hall') && ($('#' + (i + 1)).val() == 'Elgin Hall'))) {
          amt = amt + elhrLohr;
          if ($('#' + i).attr('id') == '1') {
          loc = loc + $('#' + i).val() + " to " + $('#' + (i + 1)).val();
          } else {
            loc = loc + " to " + $('#' + (i + 1)).val();
          }
        };
        if ((($('#' + i).val() == 'Delaware Hall') && ($('#' + (i + 1)).val() == 'London Hall')) || (($('#' + i).val() == 'London Hall') && ($('#' + (i + 1)).val() == 'Delaware Hall'))) {
          amt = amt + dhrLohr;
          if ($('#' + i).attr('id') == '1') {
          loc = loc + $('#' + i).val() + " to " + $('#' + (i + 1)).val();
          } else {
            loc = loc + " to " + $('#' + (i + 1)).val();
          }
        };
        if ((($('#' + i).val() == 'Essex Hall') && ($('#' + (i + 1)).val() == 'London Hall')) || (($('#' + i).val() == 'London Hall') && ($('#' + (i + 1)).val() == 'Essex Hall'))) {
          amt = amt + ehrLohr;
          if ($('#' + i).attr('id') == '1') {
          loc = loc + $('#' + i).val() + " to " + $('#' + (i + 1)).val();
          } else {
            loc = loc + " to " + $('#' + (i + 1)).val();
          }
        };
        if ((($('#' + i).val() == 'Essex Hall') && ($('#' + (i + 1)).val() == 'Elgin Hall')) || (($('#' + i).val() == 'Elgin Hall') && ($('#' + (i + 1)).val() == 'Essex Hall'))) {
          amt = amt + ehrElhr;
          if ($('#' + i).attr('id') == '1') {
          loc = loc + $('#' + i).val() + " to " + $('#' + (i + 1)).val();
          } else {
            loc = loc + " to " + $('#' + (i + 1)).val();
          }
        };
        if ((($('#' + i).val() == 'Essex Hall') && ($('#' + (i + 1)).val() == 'Delaware Hall')) || (($('#' + i).val() == 'Delaware Hall') && ($('#' + (i + 1)).val() == 'Essex Hall'))) {
          amt = amt + ehrDhr;
          if ($('#' + i).attr('id') == '1') {
          loc = loc + $('#' + i).val() + " to " + $('#' + (i + 1)).val();
          } else {
            loc = loc + " to " + $('#' + (i + 1)).val();
          }
        };
        if ((($('#' + i).val() == 'Elgin Hall') && ($('#' + (i + 1)).val() == 'Lambton Hall')) || (($('#' + i).val() == 'Lambton Hall') && ($('#' + (i + 1)).val() == 'Elgin Hall'))) {
          amt = amt + elhrLahr;
          if ($('#' + i).attr('id') == '1') {
          loc = loc + $('#' + i).val() + " to " + $('#' + (i + 1)).val();
          } else {
            loc = loc + " to " + $('#' + (i + 1)).val();
          }
        };
        if ((($('#' + i).val() == 'Essex Hall') && ($('#' + (i + 1)).val() == 'Lambton Hall')) || (($('#' + i).val() == 'Lambton Hall') && ($('#' + (i + 1)).val() == 'Essex Hall'))) {
          amt = amt + ehrLahr;
          if ($('#' + i).attr('id') == '1') {
          loc = loc + $('#' + i).val() + " to " + $('#' + (i + 1)).val();
          } else {
            loc = loc + " to " + $('#' + (i + 1)).val();
          }
        };
        if ((($('#' + i).val() == 'Delware Hall') && ($('#' + (i + 1)).val() == 'Lambton Hall')) || (($('#' + i).val() == 'Lambton Hall') && ($('#' + (i + 1)).val() == 'Delaware Hall'))) {
          amt = amt + dhrLahr;
          if ($('#' + i).attr('id') == '1') {
          loc = loc + $('#' + i).val() + " to " + $('#' + (i + 1)).val();
          } else {
            loc = loc + " to " + $('#' + (i + 1)).val();
          }
        };
        if ((($('#' + i).val() == 'London Hall') && ($('#' + (i + 1)).val() == 'Lambton Hall')) || (($('#' + i).val() == 'Lambton Hall') && ($('#' + (i + 1)).val() == 'London Hall'))) {
          amt = amt + lohrLahr;
          if ($('#' + i).attr('id') == '1') {
          loc = loc + $('#' + i).val() + " to " + $('#' + (i + 1)).val();
          } else {
            loc = loc + " to " + $('#' + (i + 1)).val();
          }
        };
        if ((($('#' + i).val() == 'UCC') && ($('#' + (i + 1)).val() == 'Lambton Hall')) || (($('#' + i).val() == 'Lambton Hall') && ($('#' + (i + 1)).val() == 'UCC'))) {
          amt = amt + lahrUcc;
          if ($('#' + i).attr('id') == '1') {
          loc = loc + $('#' + i).val() + " to " + $('#' + (i + 1)).val();
          } else {
            loc = loc + " to " + $('#' + (i + 1)).val();
          }
        };
        if ((($('#' + i).val() == 'UCC') && ($('#' + (i + 1)).val() == 'Delaware Hall')) || (($('#' + i).val() == 'Delaware Hall') && ($('#' + (i + 1)).val() == 'UCC'))) {
          amt = amt + dhrUcc;
          if ($('#' + i).attr('id') == '1') {
          loc = loc + $('#' + i).val() + " to " + $('#' + (i + 1)).val();
          } else {
            loc = loc + " to " + $('#' + (i + 1)).val();
          }
        };
        if ((($('#' + i).val() == 'UCC') && ($('#' + (i + 1)).val() == 'Elgin Hall')) || (($('#' + i).val() == 'Elgin Hall') && ($('#' + (i + 1)).val() == 'UCC'))) {
          amt = amt + elhrDhr;
          if ($('#' + i).attr('id') == '1') {
          loc = loc + $('#' + i).val() + " to " + $('#' + (i + 1)).val();
          } else {
            loc = loc + " to " + $('#' + (i + 1)).val();
          }
        };
        if ((($('#' + i).val() == 'UCC') && ($('#' + (i + 1)).val() == 'Essex Hall')) || (($('#' + i).val() == 'Essex Hall') && ($('#' + (i + 1)).val() == 'UCC'))) {
          amt = amt + ehrUcc;
          if ($('#' + i).attr('id') == '1') {
          loc = loc + $('#' + i).val() + " to " + $('#' + (i + 1)).val();
          } else {
            loc = loc + " to " + $('#' + (i + 1)).val();
          }
        };
        if ((($('#' + i).val() == 'UCC') && ($('#' + (i + 1)).val() == 'London Hall')) || (($('#' + i).val() == 'London Hall') && ($('#' + (i + 1)).val() == 'UCC'))) {
          amt = amt + lohrLahr;
          if ($('#' + i).attr('id') == '1') {
          loc = loc + $('#' + i).val() + " to " + $('#' + (i + 1)).val();
          } else {
            loc = loc + " to " + $('#' + (i + 1)).val();
          }
        };
        
        if (($('#' + i).val()) == ($('#' + (i + 1)).val())) { 
          amt;
          if ($('#' + i).attr('id') == '1') {
          loc = loc + $('#' + i).val() + " to " + $('#' + (i + 1)).val();
          } else {
            loc = loc + " to " + $('#' + (i + 1)).val();
          }
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
    $('<div class="form-group f' + nextStop + '"><label for=' + nextStop + '>Stop ' + lastStop + '</label><select id=' + nextStop + ' class="select form-control"><option disabled selected>---</option><option value="Delaware Hall">Delaware Hall</option><option value="Elgin Hall">Elgin Hall</option><option value="Essex Hall">Essex Hall</option><option value="Lambton Hall">Lambton Hall</option><option value="London Hall">London Hall</option><option value="UCC">UCC</option></select></div>').insertAfter(".f" + lastStop);
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
