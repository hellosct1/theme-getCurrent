function setSidebarStyle(theme) {

  if (theme.colors) 
  {
    console.log("accent color : " +  theme.colors.accentcolor);
    console.log("toolbar : " + theme.colors.toolbar);
    console.log("frame : " +   theme.colors.frame);
    console.log("texte color :" + theme.colors.textcolor); 
    console.log("tab text : "+  theme.colors.tab_text);
    console.log("backgroung tab text : " +  theme.colors.background_tab_text);
    console.log("toolbar : " +  theme.colors.toolbar);
    console.log("toolbar texte : " +  theme.colors.toolbar_text);
    console.log("bookmark texte : " +  theme.colors.bookmark_text);
    console.log("toolnar field : " +  theme.colors.toolbar_field);
    console.log("toolnar field text : " +  theme.colors.toolbar_field_text);
    console.log("toolbar top separator : " +  theme.colors.toolbar_top_separator);
    console.log("toolbar bottom separator : " +  theme.colors.toolbar_bottom_separator);
    console.log("toolbar vertical separator : " + theme.colors.toolbar_vertical_separator);
  }
  
}

// Set the element style when the extension page loads
async function setInitialStyle() {
  var theme = await browser.theme.getCurrent();
  setSidebarStyle(theme);
}
setInitialStyle();

