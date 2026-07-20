// Prevent multiple panels
if (document.getElementById("cellumove-panel")) {
    document.getElementById("cellumove-panel").remove();
}

// Create panel
const panel = document.createElement("div");
panel.id = "cellumove-panel";

panel.style.position = "fixed";
panel.style.top = "120px";
panel.style.right = "20px";
panel.style.width = "280px";
panel.style.background = "white";
panel.style.border = "1px solid #ddd";
panel.style.borderRadius = "12px";
panel.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";
panel.style.padding = "16px";
panel.style.zIndex = "999999";
panel.style.fontFamily = "Arial";

panel.innerHTML = `
<h2 style="margin-top:0">
🩷 Cellumove Toolkit
</h2>

<button id="assignImages"
style="
width:100%;
padding:12px;
border:none;
border-radius:8px;
cursor:pointer;
background:#ff4f87;
color:white;
font-size:15px;
">
Auto Assign Images
</button>

<p style="margin-top:12px;font-size:12px;color:#666;">
Version 1.0
</p>
`;

document.body.appendChild(panel);

document
.getElementById("assignImages")
.onclick = () => {

    alert("Next step: Auto Assign Images");

};