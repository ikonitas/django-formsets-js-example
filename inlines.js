$().ready(function() {

  $(".add_another").on("click", function(event) {
    event.preventDefault();
    debugger;
    var prefix = $(this).attr("prefix"),
      total_forms = $("#id_" + prefix + "-TOTAL_FORMS"),
      form_num = parseInt(total_forms.val()),
      cloned_form = $("#empty_" + prefix).clone();

    cloned_form.attr("id", "id_" + prefix + "_" + form_num);
    cloned_form.removeClass("empty_form");

    /* Replace labels */
    $(cloned_form).find("label").each(function(index, element) {
      element.htmlFor = element.htmlFor.replace(/__prefix__/, form_num);
    });

    /* Replace ids */
    $(cloned_form).find("[id*='__prefix__']").each(function(index, element) {
      element.id = element.id.replace(/__prefix__/, form_num);
    });

    /* Replace names */
    $(cloned_form).find("[name*='__prefix__']").each(function(index, element) {
      element.name = element.name.replace(/__prefix__/, form_num);
    });

    cloned_form.removeClass('hidden');
    cloned_form.insertBefore($(this).parent());

    total_forms.attr("value", form_num + 1);

    event.preventDefault();
  });

});
