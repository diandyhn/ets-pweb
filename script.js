function loadContent(){
    var url = "http://159.223.51.203:81/api/bio";
    fetch(url).then(response => response.json())
        .then(function(data){
            var template = data.map(post => {
                return `
                <div style="width: 400px; height: hug;">
                    <div class="card border-left-success shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col-auto">
                                    <div class="h9 mb-0 font-weight-bold text-blue-500">${post.name}</div>
                                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        ${post.id}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                `;
            });

            document.getElementById("hasil").innerHTML = template.join('<br>');
        }).catch(function(e){
            alert("gagal");
        });
};
