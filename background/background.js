async function getCurrentThemeInfo() {
  const themeInfo = await browser.theme.getCurrent();

console.log(themeInfo);
  
console.log("accent color : " +  themeInfo.accentcolor);
console.log("frame : " +   themeInfo.frame);
console.log("texte color :" + themeInfo.textcolor); 
console.log("tab text : "+  themeInfo.tab_text);
console.log("backgroung tab text : " +  themeInfo.background_tab_text);
console.log("toolbar : " +  themeInfo.toolbar);
console.log("toolbar texte : " +  themeInfo.toolbar_text);
console.log("bookmark texte : " +  themeInfo.bookmark_text);
console.log("toolnar field : " +  themeInfo.toolbar_field);
console.log("toolnar field text : " +  themeInfo.toolbar_field_text);
console.log("toolbar top separator : " +  themeInfo.toolbar_top_separator);
console.log("toolbar bottom separator : " +  themeInfo.toolbar_bottom_separator);
console.log("toolbar vertical separator : " + themeInfo.toolbar_vertical_separator);
  
}

getCurrentThemeInfo();



