(() => {
  const widgetId = "_bn_widget_";
  const widget = document.getElementById(widgetId);

  if (!widget || typeof window.Bnovo_Widget === "undefined") {
    return;
  }

  window.Bnovo_Widget.init(() => {
    window.Bnovo_Widget.open(widgetId, {
      type: "horizontal",
      uid: "d9c69418-efd6-4234-b6d1-d315ee3170ed",
      lang: "ru",
      currency: "RUB",
      width: "100%",
      width_mobile: "300",
      background: "#ffffff",
      background_mobile: "#ffffff",
      bg_alpha: "100",
      bg_alpha_mobile: "100",
      border_color_mobile: "#d6d1c8",
      padding: "18",
      padding_mobile: "18",
      border_radius: "0",
      button_font_size: "14",
      button_height: "48",
      font_type: "roboto",
      without_title: "on",
      without_title_mobile: "on",
      title_mobile: "Проверить даты",
      title_color: "#151515",
      title_color_mobile: "#151515",
      title_size: "22",
      title_size_mobile: "22",
      inp_color: "#151515",
      inp_bordhover: "#111111",
      inp_bordcolor: "#d6d1c8",
      inp_alpha: "0",
      btn_background: "#111111",
      btn_background_over: "#2b2b2b",
      btn_textcolor: "#ffffff",
      btn_textover: "#ffffff",
      btn_bordcolor: "#111111",
      btn_bordhover: "#2b2b2b",
      min_age: "0",
      max_age: "17",
      adults_default: "1",
      dates_preset: "on",
      dfrom_today: "on",
      dfrom_value: "2",
      dto_nextday: "on",
      dto_value: "2",
      cancel_color: "#111111",
      url: "https://cheerful-hamster-a21aae.netlify.app/booking.html",
      switch_mobiles: "on",
      switch_mobiles_width: "800",
    });
  });
})();
