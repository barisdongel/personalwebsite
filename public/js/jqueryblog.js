let my_data, my_author, my_description, my_items, my_link, my_pubDate;

$.ajax({
    url: "https://api.rss2json.com/v1/api.json",
    data: {"rss_url": "https://medium.com/feed/@barisdng26"},
    success: function (data) {
        my_data = data;
        my_author = my_data["feed"]["author"]; // It returns blank, you should define this in medium i think
        my_items = my_data["items"];

        for(let i = 0; i < my_items.length; i++) {
            let my_item = my_items[i];
            let my_item_title = my_item["title"]; // get items author
            let my_item_pubDate = my_item["pubDate"]; // get items author
            let my_item_description = my_item["description"]; // get items author
            let my_item_link = my_item["link"]; // get items author

            // create item
            let my_item_div = document.createElement('div');
            my_item_div.setAttribute("id", "item" + i.toString());

            // append title to item div
            let my_item_title_div = document.createElement('div');
            my_item_title_div.setAttribute("id", "author" + i.toString());

            // append pubDate to item div
            let my_item_pubDate_div = document.createElement('div');
            my_item_pubDate_div.setAttribute("item" + i.toString(), "pubDate" + i.toString());

            // append description to item div
            let my_item_description_div = document.createElement('div');
            my_item_description_div.setAttribute("item" + i.toString(), "description" + i.toString());

            // append link to item div
            let my_item_link_div = document.createElement('div');
            my_item_link_div.setAttribute("item" + i.toString(), "link" + i.toString());
            
            // change title content of the item
            my_item_title_div.innerHTML = "<h1 class='card-title'>" + my_item_title + "</h1>";

            // change pubDate content of the item
            my_item_pubDate_div.innerHTML ="<h5 class='pt-4 pb-4 blockquote-footer'> Yayın Tarihi: " + my_item_pubDate + "</h5>";  
            
            // change description content of the item
            my_item_description_div.innerHTML = "<p class='card-text'>"+my_item_description;+"</p>"

            // change link content of the item
            my_item_link_div.innerHTML ="<a class='btn btn-info p-2' href='"+my_item_link+"'>Yazıyı Oku</a><hr>";  

            document.getElementById("items").appendChild(my_item_div);
            document.getElementById("item" + i.toString()).appendChild(my_item_title_div);
            document.getElementById("item" + i.toString()).appendChild(my_item_description_div);
            document.getElementById("item" + i.toString()).appendChild(my_item_pubDate_div);
            document.getElementById("item" + i.toString()).appendChild(my_item_link_div);

        }


        // console.log(data);
    }
});