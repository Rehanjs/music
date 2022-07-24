// Home Underline Effect Logic 
// Nav bar Anchor Tags Varaibles 
const nav_home_anchor = document.getElementById('Home_link');
const nav_recent_anchor = document.getElementById('recent_music_link');
const nav_singers_anchor = document.getElementById('singers_link');
const nav_contact_us_anchor = document.getElementById('contact_us');
const nav_premium_anchor = document.getElementById('premium');
// Arrays Used To Remove Others Underline 
const Remove_for_Home = [nav_recent_anchor, nav_singers_anchor, nav_contact_us_anchor, nav_premium_anchor];
const Remove_for_recent = [nav_home_anchor, nav_singers_anchor, nav_contact_us_anchor, nav_premium_anchor];
const Remove_for_singers = [nav_home_anchor, nav_recent_anchor, nav_contact_us_anchor, nav_premium_anchor];
const Remove_for_contact = [nav_home_anchor, nav_recent_anchor, nav_singers_anchor, nav_premium_anchor];
const Remove_for_premium = [nav_home_anchor, nav_recent_anchor, nav_singers_anchor, nav_contact_us_anchor];
// Default Fucntion Starts Here
nav_home_anchor.classList.add('Nav_home_underline');
for (element of Remove_for_Home) {
    element.classList.remove('Nav_home_underline');
    element.classList.add('Nav_anchors_hover_bg');
}
// Default Function Ends Here 
Home_anchor_underline = () => {
    for (element of Remove_for_Home) {
        element.classList.remove('Nav_home_underline');
        element.classList.add('Nav_anchors_hover_bg');
    }
    nav_home_anchor.classList.add('Nav_home_underline');
    nav_home_anchor.classList.remove('Nav_anchors_hover_bg');
}
Recent_anchor_underline = () => {
    for (element of Remove_for_recent) {
        element.classList.remove('Nav_home_underline');
        element.classList.add('Nav_anchors_hover_bg');
        element.classList.add('Nav_anchors_hover_bg');
    }
    nav_recent_anchor.classList.add('Nav_home_underline');
    nav_recent_anchor.classList.remove('Nav_anchors_hover_bg');
}
Singers_anchor_underline = () => {
    for (element of Remove_for_singers) {
        element.classList.remove('Nav_home_underline');
        element.classList.add('Nav_anchors_hover_bg');
    }
    nav_singers_anchor.classList.add('Nav_home_underline');
    nav_singers_anchor.classList.remove('Nav_anchors_hover_bg');
}
Contact_anchor_underline = () => {
    for (element of Remove_for_contact) {
        element.classList.remove('Nav_home_underline');
        element.classList.add('Nav_anchors_hover_bg');
    }
    nav_contact_us_anchor.classList.add('Nav_home_underline');
    nav_contact_us_anchor.classList.remove('Nav_anchors_hover_bg');
}
Premium_anchor_underline = () => {
    for (element of Remove_for_premium) {
        element.classList.remove('Nav_home_underline');
        element.classList.add('Nav_anchors_hover_bg');
    }
    nav_premium_anchor.classList.add('Nav_home_underline');
    nav_premium_anchor.classList.remove('Nav_anchors_hover_bg');
}
// Ends 


// Recent Underline Effect Logic 
recent_anchor_underline = () => {

    recent_link.classList.add('Recent_hover')
}
recent_anchor_underline_remove = () => {
    let recent_link = document.getElementById('recent_music_link');
    recent_link.classList.remove('Recent_hover')

}
// Ends 


// singers Underline Effect Logic 
singers_anchor_underline = () => {
    let singers_link = document.getElementById('singers_link');
    singers_link.classList.add('singers_hover')
}
singers_anchor_underline_remove = () => {
    let singers_link = document.getElementById('singers_link');
    singers_link.classList.remove('singers_hover')

}
// Ends 


// Contact Us  Underline Effect Logic 
contact_us_anchor_underline = () => {
    let contact_us = document.getElementById('contact_us');
    contact_us.classList.add('contact_us_hover')
}
contact_us_anchor_underline_remove = () => {
    let contact_us_hover_link = document.getElementById('contact_us');
    contact_us_hover_link.classList.remove('contact_us_hover')

}
// Ends 
// Premium Music Underline Effect 

premium_anchor_underline = () => {
    let contact_us = document.getElementById('premium');
    contact_us.classList.add('premium_hover')
}
premium_underline_remove = () => {
    let contact_us_hover_link = document.getElementById('premium');
    contact_us_hover_link.classList.remove('premium_hover');

}

// Ends 




// Click to hide Search bar Click To Show again 

Hide_search = () => {
    let Searchbar = document.getElementById('searchbar')
    if (Searchbar.style.opacity != '1') {
        Searchbar.style.opacity = '1';
        Searchbar.style.transition = '.1s ease';
        Searchbar.style.transitionProperty = 'opacity';
        // Place Holder Changing Every Second 
        change_placeholder();
    }

    else {
        Searchbar.style.opacity = '0';
        Searchbar.style.transition = '.1s ease';
        Searchbar.style.transitionProperty = 'opacity';

    }

}

SearchToolTip = () => {

    let SearchIcon = document.getElementById('SearchButton');
    SearchIcon.classList.add('Search_tool_tip')

}
RemoveSearchToolTip = () => {
    let SearchIcon = document.getElementById('SearchButton');
    SearchIcon.classList.remove('Search_tool_tip');
}

// Songs Duration Tool Tip 
Duration1 = () => {

    let duration = document.getElementById('Song_duration_1');
    duration.classList.add('duration')

}
RemoveDuration1 = () => {
    let duration = document.getElementById('Song_duration_1');
    duration.classList.remove('duration');
}
Duration2 = () => {

    let duration1 = document.getElementById('Song_duration_2');
    duration1.classList.add('duration')

}
RemoveDuration2 = () => {
    let duration1 = document.getElementById('Song_duration_2');
    duration1.classList.remove('duration')
}
Duration3 = () => {

    let duration2 = document.getElementById('Song_duration_3');
    duration2.classList.add('duration')
}
RemoveDuration3 = () => {
    let duration2 = document.getElementById('Song_duration_3');
    duration2.classList.remove('duration')
}
Duration4 = () => {

    let duration3 = document.getElementById('Song_duration_4');
    duration3.classList.add('duration')

}
RemoveDuration4 = () => {
    let duration3 = document.getElementById('Song_duration_4');
    duration3.classList.remove('duration')
}
Duration5 = () => {

    let duration4 = document.getElementById('Song_duration_5');
    duration4.classList.add('duration')

}
RemoveDuration5 = () => {
    let duration4 = document.getElementById('Song_duration_5');
    duration4.classList.remove('duration')
}

/*===============================================================================
    ===============================================================================
            Side Menu | Side Bar | Side Menu | Side Menu | Side Bar | Side Menu
    ===============================================================================
    =============================================================================== */
/*===================================================================================================
                        To Show More Main Categories Categories | "See More" Button Logic Here
===================================================================================================*/
//    Making Condition
document.getElementById("See_more_cate").innerHTML = "See More";

Show_more_categories = () => {
    let Show_more_btn = document.getElementById("See_more_cate");
    let Side_bg = document.getElementById("Side_bar_back_ground");
    let Seeless_arrow = document.getElementById("See_less_arrow");
    let cate1 = document.getElementById("Ex_Category1");
    let cate2 = document.getElementById("Ex_Category2");
    let cate3 = document.getElementById("Ex_Category3");
    let cate4 = document.getElementById("Ex_Category4");
    let cate5 = document.getElementById("Ex_Category5");
    let cate6 = document.getElementById("Ex_Category6");
    let Six_cate_array = [cate1, cate2, cate3, cate4, cate5, cate6];

    if (Show_more_btn.innerHTML == "See More") {
        for (element of Six_cate_array) {
            element.style.display = "flex";
            element.style.opacity = "1";
            Side_bg.style.height = "1280px";
            Show_more_btn.innerHTML = "See Less";
            Seeless_arrow.style.transform = "rotate(270deg)";
            Seeless_arrow.style.marginTop = "7px";
            Seeless_arrow.style.marginLeft = "7px";
        }
    } else {
        for (element of Six_cate_array) {
            element.style.display = "none";
            element.style.opacity = "0";
            Side_bg.style.height = "1000px";
            Show_more_btn.innerHTML = "See More";
            Seeless_arrow.style.transform = "rotate(90deg)";
            Seeless_arrow.style.marginTop = "0px";
        }
    }
}

// Hiding The Side Bar
document.getElementById("Catagori_Details_box").style.left = "-101%";
// Ends
// Same Things Every Where 
const All_categories_in_one_box = document.getElementById('Cate_gories_all_container');
const See_more_btn = document.getElementById("See_more_cate");
const Side_bg = document.getElementById("Side_bar_back_ground");
All_categories_in_one_box.style.transition = 'opacity .4s ease';
/*=========================================================
 Hide Catagori Details By Clicking On the Arrow Button 
=========================================================*/
Hide_cata_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");
    let Side_nav_btn = document.getElementById("Side_Nav_btn");
    let Side_bg = document.getElementById("Side_bar_back_ground");
    cata_box.style.transition = ".3s ease";
    cata_box.style.left = "-101%";
    Side_nav_btn.style.display = "flex";
    top_part.style.transition = '.2s ease'
    top_part.style.opacity = '1';
    top_part.style.visibility = 'visible';

    All_categories_in_one_box.classList.remove('Hide_All_categories_on_details');
    setTimeout(() => {
        cata_cont.style.zIndex = "-1";
    }, 700);
    if (See_more_btn.innerHTML == 'See Less') {
        Side_bg.style.height = '1280px';
    }
    else if (See_more_btn.innerHTML == 'See More') {
        Side_bg.style.height = '1000px';
    }
};

// Variable Of Options
let optionOne = document.getElementById("cat_option1");
let optiontwo = document.getElementById("cat_option2");
let optionthree = document.getElementById("cat_option3");
let optionfour = document.getElementById("cat_option4");
let optionfive = document.getElementById("cat_option5");
let optionsix = document.getElementById("cat_option6");
let optionseven = document.getElementById("cat_option7");
let optioneight = document.getElementById("cat_option8");
let optionnine = document.getElementById("cat_option9");
let optionten = document.getElementById("cat_option10");
/*================================================================================
                            Show Computer Category More Options
==================================================================================*/
show_computers_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");

    let top_part = document.getElementById("Side_catagori_logo");
    let Side_nav_btn = document.getElementById("Side_Nav_btn");

    optionOne.innerHTML = "Processors"; // 1
    optiontwo.innerHTML = "Hard Drives"; // 2
    optionthree.innerHTML = "Casings"; // 3
    optionfour.innerHTML = "Keyboard & Mouse"; // 4
    optionfive.innerHTML = "Leds & Lcds"; //5
    optionsix.innerHTML = "Power Cables"; // 6
    optionseven.innerHTML = "Speakers"; // 7
    optioneight.innerHTML = "Headphones"; // 8
    optionnine.innerHTML = "Revolving Chairs"; // 9
    optionten.innerHTML = "Graphic Cards"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".3s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "1";

        top_part.style.opacity = '0'
        top_part.style.visibility = 'hidden';

        Side_bg.style.height = '900px';
        setTimeout(() => {
            All_categories_in_one_box.classList.add('Hide_All_categories_on_details');

        }, 0);
    }
};

/*================================================================================
                            Show Grocery Category More Options
==================================================================================*/
show_grocery_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");

    let top_part = document.getElementById("Side_catagori_logo");
    let Side_nav_btn = document.getElementById("Side_Nav_btn");

    optionOne.innerHTML = "Soaps & Washing"; // 1
    optiontwo.innerHTML = "Vegetables"; // 2
    optionthree.innerHTML = "Cooking Oils"; // 3
    optionfour.innerHTML = "Spoons & Dishes"; // 4
    optionfive.innerHTML = "Jugs & Glasses"; //5
    optionsix.innerHTML = "Water Bottles"; // 6
    optionseven.innerHTML = "Juicer & Blender"; // 7
    optioneight.innerHTML = "Pots"; // 8
    optionnine.innerHTML = "Meat"; // 9
    optionten.innerHTML = "Rice & Beans"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".3s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
        top_part.style.opacity = '0'
        top_part.style.visibility = 'hidden';

        Side_bg.style.height = '900px';
        setTimeout(() => {
            All_categories_in_one_box.classList.add('Hide_All_categories_on_details');

        }, 0);
    }
};

/*================================================================================
                            Show Animals Category More Options
==================================================================================*/
show_animal_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");

    let top_part = document.getElementById("Side_catagori_logo");
    let Side_nav_btn = document.getElementById("Side_Nav_btn");

    optionOne.innerHTML = "Hens"; // 1
    optiontwo.innerHTML = "Bulls"; // 2
    optionthree.innerHTML = "Cows"; // 3
    optionfour.innerHTML = "Gots"; // 4
    optionfive.innerHTML = "Sheeps"; //5
    optionsix.innerHTML = "Camels"; // 6
    optionseven.innerHTML = "Birds"; // 7
    optioneight.innerHTML = "Fishes"; // 8
    optionnine.innerHTML = "Snakes"; // 9
    optionten.innerHTML = "Dogs & Cats"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".3s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
        top_part.style.opacity = '0'
        top_part.style.visibility = 'hidden';

        Side_bg.style.height = '900px';
        setTimeout(() => {
            All_categories_in_one_box.classList.add('Hide_All_categories_on_details');

        }, 0);
    }
};
/*================================================================================
                            Show Furniture Category More Options
==================================================================================*/
show_furniture_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");

    let top_part = document.getElementById("Side_catagori_logo");
    let Side_nav_btn = document.getElementById("Side_Nav_btn");

    optionOne.innerHTML = "Dining Table"; // 1
    optiontwo.innerHTML = "Wardrobe"; // 2
    optionthree.innerHTML = "Bed"; // 3
    optionfour.innerHTML = "Chairs"; // 4
    optionfive.innerHTML = "Study Table"; //5
    optionsix.innerHTML = "Tea Trolly"; // 6
    optionseven.innerHTML = "Sofa"; // 7
    optioneight.innerHTML = "Dressing Table"; // 8
    optionnine.innerHTML = "Cabinets"; // 9
    optionten.innerHTML = "Shoecase"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".3s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
        top_part.style.opacity = '0'
        top_part.style.visibility = 'hidden';

        Side_bg.style.height = '900px';
        setTimeout(() => {
            All_categories_in_one_box.classList.add('Hide_All_categories_on_details');

        }, 0);
    }
};
/*================================================================================
                            Show Software Category More Options
==================================================================================*/
show_Softwares_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");
    let Side_nav_btn = document.getElementById("Side_Nav_btn");

    optionOne.innerHTML = "Adobe Illustrator"; // 1
    optiontwo.innerHTML = "Adobe Photoshop"; // 2
    optionthree.innerHTML = "Premier Pro"; // 3
    optionfour.innerHTML = "Canva"; // 4
    optionfive.innerHTML = "After effects"; //5
    optionsix.innerHTML = "Microsoft Office"; // 6
    optionseven.innerHTML = "Wondershare Filmora"; // 7
    optioneight.innerHTML = "Android Studio"; // 8
    optionnine.innerHTML = "Obs Studio"; // 9
    optionten.innerHTML = "Lightroom"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".3s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
        top_part.style.opacity = '1'
        top_part.style.opacity = '0'
        top_part.style.visibility = 'hidden';;

        Side_bg.style.height = '900px';
        setTimeout(() => {
            All_categories_in_one_box.classList.add('Hide_All_categories_on_details');
        }, 0);
    }
};
/*================================================================================
                            Show Toys Category More Options
==================================================================================*/
show_Toys_catagori_details = () => {





    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");
    let Side_nav_btn = document.getElementById("Side_Nav_btn");

    optionOne.innerHTML = "Helicopter"; // 1
    optiontwo.innerHTML = "Cars"; // 2
    optionthree.innerHTML = "Alphabets Keyboard"; // 3
    optionfour.innerHTML = "Trains"; // 4
    optionfive.innerHTML = "Talking Cat"; //5
    optionsix.innerHTML = "Cooking Kit"; // 6
    optionseven.innerHTML = "Dolls"; // 7
    optioneight.innerHTML = "Guns & Military"; // 8
    optionnine.innerHTML = "Animals & Forest"; // 9
    optionten.innerHTML = "Painting & Sketching"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".3s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
        top_part.style.opacity = '0'
        top_part.style.visibility = 'hidden';


        Side_bg.style.height = '900px';
        setTimeout(() => {
            All_categories_in_one_box.classList.add('Hide_All_categories_on_details');
        }, 0);
    }
};
/*================================================================================
                            Show Home Appliances Category More Options
==================================================================================*/
show_Home_appliances_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");
    let Side_nav_btn = document.getElementById("Side_Nav_btn");
    // Options Values For Category Details
    optionOne.innerHTML = "Washing Machines"; // 1
    optiontwo.innerHTML = "Microwave Ovens"; // 2
    optionthree.innerHTML = "Refregerator"; // 3
    optionfour.innerHTML = "Fridge"; // 4
    optionfive.innerHTML = "Juicer"; //5
    optionsix.innerHTML = "Stove"; // 6
    optionseven.innerHTML = "Led"; // 7
    optioneight.innerHTML = "Room Cooler"; // 8
    optionnine.innerHTML = "Water Dispensor"; // 9
    optionten.innerHTML = "Vacuum Cleaner"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".3s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
        top_part.style.opacity = '0'
        top_part.style.visibility = 'hidden';

        Side_bg.style.height = '900px';
        setTimeout(() => {
            All_categories_in_one_box.classList.add('Hide_All_categories_on_details');
        }, 0);
    }
};
/*================================================================================
                            Show Home Decoration Category More Options
==================================================================================*/
show_Home_Decoration_catagori_details = () => {





    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");
    let Side_nav_btn = document.getElementById("Side_Nav_btn");

    optionOne.innerHTML = "Paintings"; // 1
    optiontwo.innerHTML = "Lamps & Lights"; // 2
    optionthree.innerHTML = "Wallpapers"; // 3
    optionfour.innerHTML = "Plants & Flowers"; // 4
    optionfive.innerHTML = "God Names & Ayat"; //5
    optionsix.innerHTML = "Super Heros & Toys"; // 6
    optionseven.innerHTML = "Swords"; // 7
    optioneight.innerHTML = "Birthday"; // 8
    optionnine.innerHTML = "Wedding"; // 9
    optionten.innerHTML = "Mirrors"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".3s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
        top_part.style.opacity = '0'
        top_part.style.visibility = 'hidden';

        Side_bg.style.height = '900px';
        setTimeout(() => {
            All_categories_in_one_box.classList.add('Hide_All_categories_on_details');
        }, 0);
    }
};
/*================================================================================
                            Show Gents Garments Category More Options
==================================================================================*/
show_Gents_Garments_catagori_details = () => {

    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");
    let Side_nav_btn = document.getElementById("Side_Nav_btn");
    let Side_bg = document.getElementById("Side_bar_back_ground");
    let See_more_btn = document.getElementById("See_more_cate");

    optionOne.innerHTML = "Hoodies & Jackets"; // 1
    optiontwo.innerHTML = "Pants"; // 2
    optionthree.innerHTML = "T-Shirts & Shirts"; // 3
    optionfour.innerHTML = "Shirwani"; // 4
    optionfive.innerHTML = "Kurta & Pajama"; //5
    optionsix.innerHTML = "Shalwar & Kameez"; // 6
    optionseven.innerHTML = "Coats"; // 7
    optioneight.innerHTML = "Belt & Tie"; // 8
    optionnine.innerHTML = "Vas Coat"; // 9
    optionten.innerHTML = "3 Piece Suit"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".3s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
        top_part.style.opacity = '0'
        top_part.style.visibility = 'hidden';


        Side_bg.style.height = '900px';
        setTimeout(() => {
            All_categories_in_one_box.classList.add('Hide_All_categories_on_details');
        }, 0);
    }
};
/*================================================================================
                            Show Ladies Garments Category More Options
==================================================================================*/
show_Ladies_Garments_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");
    let Side_nav_btn = document.getElementById("Side_Nav_btn");

    optionOne.innerHTML = "Hoodies & Jackets"; // 1
    optiontwo.innerHTML = "Pants"; // 2
    optionthree.innerHTML = "T-Shirts & Shirts"; // 3
    optionfour.innerHTML = "Lehnga"; // 4
    optionfive.innerHTML = "Kurti & Pajama"; //5
    optionsix.innerHTML = "Shalwar & Kameez"; // 6
    optionseven.innerHTML = "Maxi"; // 7
    optioneight.innerHTML = "Frock"; // 8
    optionnine.innerHTML = "Shalls"; // 9
    optionten.innerHTML = "Burkha"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".3s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
        top_part.style.opacity = '0'
        top_part.style.visibility = 'hidden';


        Side_bg.style.height = '900px';
        setTimeout(() => {
            All_categories_in_one_box.classList.add('Hide_All_categories_on_details');
        }, 0);
    }
};
/*================================================================================
                            Show Vehicle Parts Garments Category More Options
==================================================================================*/
show_Vehicle_Parts_Garments_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");
    let Side_nav_btn = document.getElementById("Side_Nav_btn");
    optionOne.innerHTML = "Tires"; // 1
    optiontwo.innerHTML = "Seats"; // 2
    optionthree.innerHTML = "Glass"; // 3
    optionfour.innerHTML = "Battery"; // 4
    optionfive.innerHTML = "Shining Spray"; //5
    optionsix.innerHTML = "Locks"; // 6
    optionseven.innerHTML = "Horn"; // 7
    optioneight.innerHTML = "Steering"; // 8
    optionnine.innerHTML = "Bumper"; // 9
    optionten.innerHTML = "Decoration"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".3s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
        top_part.style.opacity = '0'
        top_part.style.visibility = 'hidden';


        Side_bg.style.height = '900px';
        setTimeout(() => {
            All_categories_in_one_box.classList.add('Hide_All_categories_on_details');
        }, 0);
    }
};
/*================================================================================
                            Show Property Category More Options
==================================================================================*/
show_Property_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");
    let Side_nav_btn = document.getElementById("Side_Nav_btn");

    optionOne.innerHTML = "5 Marla Houses"; // 1
    optiontwo.innerHTML = "10 Marla Houses"; // 2
    optionthree.innerHTML = "Shops"; // 3
    optionfour.innerHTML = "Medical Stores"; // 4
    optionfive.innerHTML = "Houses For Rent"; //5
    optionsix.innerHTML = "Plots"; // 6
    optionseven.innerHTML = "Shops For Rent"; // 7
    optioneight.innerHTML = "Shops In Malls"; // 8
    optionnine.innerHTML = "Hotels"; // 9
    optionten.innerHTML = "Restaurent For Sale"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".3s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
        top_part.style.opacity = '0'
        top_part.style.visibility = 'hidden';

        Side_bg.style.height = '900px';
        setTimeout(() => {
            All_categories_in_one_box.classList.add('Hide_All_categories_on_details');
        }, 0);
    }
};
/*================================================================================
                            Show Vehicle Parts Garments Category More Options
==================================================================================*/
show_Vehicle_Parts_Garments_catagori_details = () => {





    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");
    let Side_nav_btn = document.getElementById("Side_Nav_btn");

    optionOne.innerHTML = "Tires"; // 1
    optiontwo.innerHTML = "Seats"; // 2
    optionthree.innerHTML = "Glass"; // 3
    optionfour.innerHTML = "Battery"; // 4
    optionfive.innerHTML = "Shining Spray"; //5
    optionsix.innerHTML = "Locks"; // 6
    optionseven.innerHTML = "Horn"; // 7
    optioneight.innerHTML = "Steering"; // 8
    optionnine.innerHTML = "Bumper"; // 9
    optionten.innerHTML = "Decoration"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".3s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
        top_part.style.opacity = '0'
        top_part.style.visibility = 'hidden';

        Side_bg.style.height = '900px';
        setTimeout(() => {
            All_categories_in_one_box.classList.add('Hide_All_categories_on_details');
        }, 0);
    }
};

/*================================================================================
                Show & Hide The Side Menu By clicking Three Lines Side button
==================================================================================*/
document.getElementById("Side_menu_background").style.left = "-401vw";
ShowHide = () => {
    let Side_nav_btn = document.getElementById("Side_Nav_btn");
    let Side_menu = document.getElementById("Side_menu_background");
    let cross_nav_btn = document.getElementById("Cross_Nav_btn");
    let Side_bar_overlay = document.getElementById("Side_bar_overlay");
    let no_Scroll_body = document.getElementById('body');
    // Three Details Box Variable 
    let Details_container = document.getElementById("Dots_Details_container");
    if (Side_menu.style.left == "-401vw") {
        Side_menu.style.left = "0%";
        Side_menu.style.transition = ".4s ease-in-out";
        cross_nav_btn.style.opacity = "1";

        Side_bar_overlay.classList.add('Side_menu_active_overlay');
        no_Scroll_body.style.overflowY = 'hidden';
    } else {
        Side_menu.style.transition = ".6s ease-in-out";
        Side_menu.style.left = "-401vw";
        // Close The Three Dots Details Box (if it is opened) when closing the side menu 
        Details_container.style.transition = '.4s ease-in-out'
        Details_container.style.opacity = '0';
        Details_container.style.transform = 'scale(.7)';
        Side_bar_overlay.classList.remove('Side_menu_active_overlay');
        no_Scroll_body.style.overflowY = 'visible';
        setTimeout(() => {
            Details_container.style.display = 'none';
            Details_container.style.top = '20px';
        }, 200);
    }
};



// Three Dots Functionality here 
document.getElementById("Dots_Details_container").style.opacity = '0'
Show_dots_details = () => {
    let Details_container = document.getElementById("Dots_Details_container");

    if (Details_container.style.opacity == '0') {
        Details_container.style.display = 'flex';
        Details_container.style.top = '70px';
        setTimeout(() => {
            Details_container.style.transition = '.4s ease-in-out'
            Details_container.style.opacity = '1';
            Details_container.style.transform = 'scale(1.2)';
        }, 100);
    }
    else {
        Details_container.style.transition = '.4s ease-in-out'
        Details_container.style.opacity = '0';
        Details_container.style.transform = 'scale(.3)';
        setTimeout(() => {
            Details_container.style.top = '20px';
            Details_container.style.display = 'none';
        }, 200);
    }
}

// Search Function 
Search_filter = () => {
    let search_box = document.getElementById("search_bar").value.toUpperCase();
    let song11 = document.getElementById("song1");
    let song12 = document.getElementById("song2");
    let song13 = document.getElementById("song3");
    let song14 = document.getElementById("song4");
    let song15 = document.getElementById("song5");
    let Allsongs_text = [song11, song12, song13, song14, song15];
    let song1 = document.getElementById("song1").innerText || innerHTML;
    let song2 = document.getElementById("song2").innerText || innerHTML;
    let song3 = document.getElementById("song3").innerText || innerHTML;
    let song4 = document.getElementById("song4").innerText || innerHTML;
    let song5 = document.getElementById("song5").innerText || innerHTML;
    let Allsongs = [song1, song2, song3, song4, song5];
    let content = document.getElementById("feature_content").innerText.toUpperCase();
    let textcontent = document.getElementById("feature_content");
    console.log(content);
    if (textcontent.toUpperCase.indexOf(search_box) > -1) {
        song11.style.display = 'flex';
    }
    else {

        song11.style.display = 'none';
    }
}

// Place Holder Changing Every Second Function 
change_placeholder = () => {
    let search_bar = document.getElementById("search_bar");
    let cate_placeholder1 = 'Computers';
    let cate_placeholder2 = 'Grocery';
    let cate_placeholder3 = 'Animals';
    let cate_placeholder4 = 'Furniture';
    let cate_placeholder5 = 'Softwares';
    let cate_placeholder6 = 'Toys';
    let cate_placeholder7 = 'Home Appliances';
    let cate_placeholder8 = 'Home Decoration';
    let cate_placeholder9 = 'Gents Garments';
    let cate_placeholder10 = 'Ladies Garments';
    let cate_placeholder11 = 'Vehical Parts';
    let cate_placeholder12 = 'Books';
    let cate_placeholder13 = 'Food';
    let cate_placeholder14 = 'Office';
    search_bar.placeholder = cate_placeholder1;
    setTimeout(() => { search_bar.placeholder = cate_placeholder2; }, 1200);
    setTimeout(() => { search_bar.placeholder = cate_placeholder3; }, 2200);
    setTimeout(() => { search_bar.placeholder = cate_placeholder4; }, 3200);
    setTimeout(() => { search_bar.placeholder = cate_placeholder5; }, 4200);
    setTimeout(() => { search_bar.placeholder = cate_placeholder6; }, 5200);
    setTimeout(() => { search_bar.placeholder = cate_placeholder7; }, 6200);
    setTimeout(() => { search_bar.placeholder = cate_placeholder8; }, 7200);
    setTimeout(() => { search_bar.placeholder = cate_placeholder9; }, 8200);
    setTimeout(() => { search_bar.placeholder = cate_placeholder10; }, 9200);
    setTimeout(() => { search_bar.placeholder = cate_placeholder11; }, 10200);
    setTimeout(() => { search_bar.placeholder = cate_placeholder12; }, 11200);
    setTimeout(() => { search_bar.placeholder = cate_placeholder13; }, 12200);
    setTimeout(() => { search_bar.placeholder = cate_placeholder14; }, 13200);
    console.log('its started before set interval');
    setInterval(() => {

        search_bar.placeholder = cate_placeholder1;
        setTimeout(() => { search_bar.placeholder = cate_placeholder2; }, 1200);
        setTimeout(() => { search_bar.placeholder = cate_placeholder3; }, 2200);
        setTimeout(() => { search_bar.placeholder = cate_placeholder4; }, 3200);
        setTimeout(() => { search_bar.placeholder = cate_placeholder5; }, 4200);
        setTimeout(() => { search_bar.placeholder = cate_placeholder6; }, 5200);
        setTimeout(() => { search_bar.placeholder = cate_placeholder7; }, 6200);
        setTimeout(() => { search_bar.placeholder = cate_placeholder8; }, 7200);
        setTimeout(() => { search_bar.placeholder = cate_placeholder9; }, 8200);
        setTimeout(() => { search_bar.placeholder = cate_placeholder10; }, 9200);
        setTimeout(() => { search_bar.placeholder = cate_placeholder11; }, 10200);
        setTimeout(() => { search_bar.placeholder = cate_placeholder12; }, 11200);
        setTimeout(() => { search_bar.placeholder = cate_placeholder13; }, 12200);
        setTimeout(() => { search_bar.placeholder = cate_placeholder14; }, 13200);
        console.log('its started After set interval');
    }, 14200);
}

// Variables 
let trending_song_1 = document.getElementById('trending1');
let trending_song_2 = document.getElementById('trending2');
let trending_song_3 = document.getElementById('trending3');
let trending_song_4 = document.getElementById('trending4');
let trending_song_5 = document.getElementById('trending5');
let trending_song_6 = document.getElementById('trending6');
let trending_song_7 = document.getElementById('trending7');
let trending_song_8 = document.getElementById('trending8');
let trending_song_9 = document.getElementById('trending9');
let trending_song_10 = document.getElementById('trending10');
let trending_song_11 = document.getElementById('trending11');
let trending_song_12 = document.getElementById('trending12');
let trending_song_13 = document.getElementById('trending13');
let trending_song_14 = document.getElementById('trending14');
// Dots 
let dot1 = document.getElementById('trending_dot1');
let dot2 = document.getElementById('trending_dot2');
let dot3 = document.getElementById('trending_dot3');
let dot4 = document.getElementById('trending_dot4');
let dot5 = document.getElementById('trending_dot5');
let dot6 = document.getElementById('trending_dot6');
let dot7 = document.getElementById('trending_dot7');
/*
Change_trending_song = () => {
    if (dot1.style.width == '10px' && dot2.style.width == '10px' && dot3.style.width == '10px' && dot4.style.width == '10px' && dot5.style.width == '10px' && dot6.style.width == '10px' && dot7.style.width == '10px') {
        console.log('10px hai width');

        dot1.classList.add('Dot_is_active');
        setTimeout(() => {
            trending_song_1.style.opacity = '0';
            trending_song_2.style.opacity = '1';
            dot1.classList.remove('Dot_is_active');
            dot2.classList.add('Dot_is_active');
        }, 2000);
        setTimeout(() => {
            trending_song_2.style.opacity = '0';
            trending_song_3.style.opacity = '1';
            dot2.classList.remove('Dot_is_active');
            dot3.classList.add('Dot_is_active');
        }, 4000);
        setTimeout(() => {
            trending_song_3.style.opacity = '0';
            trending_song_4.style.opacity = '1';
            dot3.classList.remove('Dot_is_active');
            dot4.classList.add('Dot_is_active');
        }, 6000);
        setTimeout(() => {
            trending_song_4.style.opacity = '0';
            trending_song_5.style.opacity = '1';
            dot4.classList.remove('Dot_is_active');
            dot5.classList.add('Dot_is_active');
        }, 8000);

        setTimeout(() => {
            trending_song_5.style.opacity = '0';
            trending_song_6.style.opacity = '1';
            dot5.classList.remove('Dot_is_active');
            dot6.classList.add('Dot_is_active');
        }, 10000);
        setTimeout(() => {
            trending_song_6.style.opacity = '0';
            trending_song_7.style.opacity = '1';
            dot6.classList.remove('Dot_is_active');
            dot7.classList.add('Dot_is_active');
        }, 12000);
        setTimeout(() => {
            trending_song_1.style.opacity = '1';
            trending_song_7.style.opacity = '0';
            dot7.classList.remove('Dot_is_active');
            dot1.classList.add('Dot_is_active');
        }, 14000);
        setTimeout(() => {
            Change_trending_song();
        }, 14000);

    }
}*/
//                                Click On Dot to Show Image
dot1_show_img = () => {
    trending_song_1.style.opacity = '1';
    trending_song_8.style.opacity = '1';
    trending_song_1.style.display = 'flex';
    trending_song_8.style.display = 'flex';
    dot1.classList.add('Dot_is_active');
    // Hiding Other Images 
    trending_song_2.style.opacity = '0';
    trending_song_3.style.opacity = '0';
    trending_song_4.style.opacity = '0';
    trending_song_5.style.opacity = '0';
    trending_song_6.style.opacity = '0';
    trending_song_7.style.opacity = '0';
    trending_song_9.style.opacity = '0';
    trending_song_10.style.opacity = '0';
    trending_song_11.style.opacity = '0';
    trending_song_12.style.opacity = '0';
    trending_song_13.style.opacity = '0';
    trending_song_14.style.opacity = '0';

    trending_song_2.style.display = 'none';
    trending_song_3.style.display = 'none';
    trending_song_4.style.display = 'none';
    trending_song_5.style.display = 'none';
    trending_song_6.style.display = 'none';
    trending_song_7.style.display = 'none';
    trending_song_9.style.display = 'none';
    trending_song_10.style.display = 'none';
    trending_song_11.style.display = 'none';
    trending_song_12.style.display = 'none';
    trending_song_13.style.display = 'none';
    trending_song_14.style.display = 'none';
    // Hiding Other Dots 
    dot2.classList.remove('Dot_is_active');
    dot3.classList.remove('Dot_is_active');
    dot4.classList.remove('Dot_is_active');
    dot5.classList.remove('Dot_is_active');
    dot6.classList.remove('Dot_is_active');
    dot7.classList.remove('Dot_is_active');

}
dot1_show_img();
dot2_show_img = () => {
    trending_song_2.style.opacity = '1';
    trending_song_9.style.opacity = '1';
    trending_song_2.style.display = 'flex';
    trending_song_9.style.display = 'flex';
    dot2.classList.add('Dot_is_active');
    // Hiding Other Images 
    trending_song_1.style.opacity = '0';
    trending_song_3.style.opacity = '0';
    trending_song_4.style.opacity = '0';
    trending_song_5.style.opacity = '0';
    trending_song_6.style.opacity = '0';
    trending_song_7.style.opacity = '0';
    trending_song_8.style.opacity = '0';
    trending_song_10.style.opacity = '0';
    trending_song_11.style.opacity = '0';
    trending_song_12.style.opacity = '0';
    trending_song_13.style.opacity = '0';
    trending_song_14.style.opacity = '0';

    trending_song_1.style.display = 'none';
    trending_song_3.style.display = 'none';
    trending_song_4.style.display = 'none';
    trending_song_5.style.display = 'none';
    trending_song_6.style.display = 'none';
    trending_song_7.style.display = 'none';
    trending_song_8.style.display = 'none';
    trending_song_10.style.display = 'none';
    trending_song_11.style.display = 'none';
    trending_song_12.style.display = 'none';
    trending_song_13.style.display = 'none';
    trending_song_14.style.display = 'none';
    // Hiding Other Dots 
    dot1.classList.remove('Dot_is_active');
    dot3.classList.remove('Dot_is_active');
    dot4.classList.remove('Dot_is_active');
    dot5.classList.remove('Dot_is_active');
    dot6.classList.remove('Dot_is_active');
    dot7.classList.remove('Dot_is_active');

}
dot3_show_img = () => {
    trending_song_3.style.opacity = '1';
    trending_song_10.style.opacity = '1';
    trending_song_3.style.display = 'flex';
    trending_song_10.style.display = 'flex';
    dot3.classList.add('Dot_is_active');
    // Hiding Other Images 
    trending_song_2.style.opacity = '0';
    trending_song_1.style.opacity = '0';
    trending_song_4.style.opacity = '0';
    trending_song_5.style.opacity = '0';
    trending_song_6.style.opacity = '0';
    trending_song_7.style.opacity = '0';
    trending_song_8.style.opacity = '0';
    trending_song_9.style.opacity = '0';
    trending_song_11.style.opacity = '0';
    trending_song_12.style.opacity = '0';
    trending_song_13.style.opacity = '0';
    trending_song_14.style.opacity = '0';
    // display None 
    trending_song_1.style.display = 'none';
    trending_song_2.style.display = 'none';
    trending_song_4.style.display = 'none';
    trending_song_5.style.display = 'none';
    trending_song_6.style.display = 'none';
    trending_song_7.style.display = 'none';
    trending_song_8.style.display = 'none';
    trending_song_9.style.display = 'none';
    trending_song_11.style.display = 'none';
    trending_song_12.style.display = 'none';
    trending_song_13.style.display = 'none';
    trending_song_14.style.display = 'none';
    // Hiding Other Dots 
    dot2.classList.remove('Dot_is_active');
    dot1.classList.remove('Dot_is_active');
    dot4.classList.remove('Dot_is_active');
    dot5.classList.remove('Dot_is_active');
    dot6.classList.remove('Dot_is_active');
    dot7.classList.remove('Dot_is_active');

}
dot4_show_img = () => {
    trending_song_4.style.opacity = '1';
    trending_song_11.style.opacity = '1';
    trending_song_4.style.display = 'flex';
    trending_song_11.style.display = 'flex';
    dot4.classList.add('Dot_is_active');
    // Hiding Other Images 
    trending_song_2.style.opacity = '0';
    trending_song_3.style.opacity = '0';
    trending_song_1.style.opacity = '0';
    trending_song_5.style.opacity = '0';
    trending_song_6.style.opacity = '0';
    trending_song_7.style.opacity = '0';
    trending_song_8.style.opacity = '0';
    trending_song_9.style.opacity = '0';
    trending_song_10.style.opacity = '0';
    trending_song_12.style.opacity = '0';
    trending_song_13.style.opacity = '0';
    trending_song_14.style.opacity = '0';
    // display None 
    trending_song_1.style.display = 'none';
    trending_song_2.style.display = 'none';
    trending_song_3.style.display = 'none';
    trending_song_5.style.display = 'none';
    trending_song_6.style.display = 'none';
    trending_song_7.style.display = 'none';
    trending_song_8.style.display = 'none';
    trending_song_9.style.display = 'none';
    trending_song_10.style.display = 'none';
    trending_song_12.style.display = 'none';
    trending_song_13.style.display = 'none';
    trending_song_14.style.display = 'none';
    // Hiding Other Dots 
    dot2.classList.remove('Dot_is_active');
    dot3.classList.remove('Dot_is_active');
    dot1.classList.remove('Dot_is_active');
    dot5.classList.remove('Dot_is_active');
    dot6.classList.remove('Dot_is_active');
    dot7.classList.remove('Dot_is_active');

}
dot5_show_img = () => {
    trending_song_5.style.opacity = '1';
    trending_song_12.style.opacity = '1';
    trending_song_5.style.display = 'flex';
    trending_song_12.style.display = 'flex';
    dot5.classList.add('Dot_is_active');
    // Hiding Other Images 
    trending_song_2.style.opacity = '0';
    trending_song_3.style.opacity = '0';
    trending_song_4.style.opacity = '0';
    trending_song_1.style.opacity = '0';
    trending_song_6.style.opacity = '0';
    trending_song_7.style.opacity = '0';
    trending_song_8.style.opacity = '0';
    trending_song_9.style.opacity = '0';
    trending_song_10.style.opacity = '0';
    trending_song_11.style.opacity = '0';
    trending_song_13.style.opacity = '0';
    trending_song_14.style.opacity = '0';

    trending_song_1.style.display = 'none';
    trending_song_2.style.display = 'none';
    trending_song_3.style.display = 'none';
    trending_song_4.style.display = 'none';
    trending_song_6.style.display = 'none';
    trending_song_7.style.display = 'none';
    trending_song_8.style.display = 'none';
    trending_song_9.style.display = 'none';
    trending_song_10.style.display = 'none';
    trending_song_11.style.display = 'none';
    trending_song_13.style.display = 'none';
    trending_song_14.style.display = 'none';
    // Hiding Other Dots 
    dot2.classList.remove('Dot_is_active');
    dot3.classList.remove('Dot_is_active');
    dot4.classList.remove('Dot_is_active');
    dot1.classList.remove('Dot_is_active');
    dot6.classList.remove('Dot_is_active');
    dot7.classList.remove('Dot_is_active');

}
dot6_show_img = () => {
    trending_song_6.style.opacity = '1';
    trending_song_13.style.opacity = '1';
    trending_song_6.style.display = 'flex';
    trending_song_13.style.display = 'flex';
    dot6.classList.add('Dot_is_active');
    // Hiding Other Images 
    trending_song_2.style.opacity = '0';
    trending_song_3.style.opacity = '0';
    trending_song_4.style.opacity = '0';
    trending_song_5.style.opacity = '0';
    trending_song_1.style.opacity = '0';
    trending_song_7.style.opacity = '0';
    trending_song_8.style.opacity = '0';
    trending_song_9.style.opacity = '0';
    trending_song_10.style.opacity = '0';
    trending_song_11.style.opacity = '0';
    trending_song_12.style.opacity = '0';
    trending_song_14.style.opacity = '0';

    trending_song_1.style.display = 'none';
    trending_song_2.style.display = 'none';
    trending_song_3.style.display = 'none';
    trending_song_4.style.display = 'none';
    trending_song_5.style.display = 'none';
    trending_song_7.style.display = 'none';
    trending_song_8.style.display = 'none';
    trending_song_9.style.display = 'none';
    trending_song_10.style.display = 'none';
    trending_song_11.style.display = 'none';
    trending_song_12.style.display = 'none';
    trending_song_14.style.display = 'none';
    // Hiding Other Dots 
    dot2.classList.remove('Dot_is_active');
    dot3.classList.remove('Dot_is_active');
    dot4.classList.remove('Dot_is_active');
    dot5.classList.remove('Dot_is_active');
    dot1.classList.remove('Dot_is_active');
    dot7.classList.remove('Dot_is_active');

}
dot7_show_img = () => {
    trending_song_7.style.opacity = '1';
    trending_song_14.style.opacity = '1';
    trending_song_7.style.display = 'flex';
    trending_song_14.style.display = 'flex';
    dot7.classList.add('Dot_is_active');
    // Hiding Other Images 
    trending_song_1.style.opacity = '0';
    trending_song_2.style.opacity = '0';
    trending_song_3.style.opacity = '0';
    trending_song_4.style.opacity = '0';
    trending_song_5.style.opacity = '0';
    trending_song_6.style.opacity = '0';
    trending_song_8.style.opacity = '0';
    trending_song_9.style.opacity = '0';
    trending_song_10.style.opacity = '0';
    trending_song_11.style.opacity = '0';
    trending_song_12.style.opacity = '0';
    trending_song_13.style.opacity = '0';

    trending_song_1.style.display = 'none';
    trending_song_2.style.display = 'none';
    trending_song_3.style.display = 'none';
    trending_song_4.style.display = 'none';
    trending_song_5.style.display = 'none';
    trending_song_6.style.display = 'none';
    trending_song_8.style.display = 'none';
    trending_song_9.style.display = 'none';
    trending_song_10.style.display = 'none';
    trending_song_11.style.display = 'none';
    trending_song_12.style.display = 'none';
    trending_song_13.style.display = 'none';
    // Hiding Other Dots 
    dot2.classList.remove('Dot_is_active');
    dot3.classList.remove('Dot_is_active');
    dot4.classList.remove('Dot_is_active');
    dot5.classList.remove('Dot_is_active');
    dot6.classList.remove('Dot_is_active');
    dot1.classList.remove('Dot_is_active');

}

// Trending Songs Add options show hide 
// let trending_options_div = document.getElementsByClassName('add_trending_playlist_fav');
// let trending_songs_options_array = [trending_options_div[0], trending_options_div[1], trending_options_div[2], trending_options_div[3], trending_options_div[3], trending_options_div[5], trending_options_div[6], trending_options_div[7], trending_options_div[8], trending_options_div[9], trending_options_div[10], trending_options_div[11], trending_options_div[12], trending_options_div[13],]
// for (element of trending_songs_options_array) {
//         element.style.display = 'none';
// }
                    // Initialy trending songs options will be hidden 
let trending_options_div1 = document.getElementsByClassName('add_trending_playlist_fav');
let trending_options_array = [trending_options_div1[0],trending_options_div1[1]];
for (element of trending_options_array) {
    element.style.display='none';
}
         // Trending Songs plus Icon details show hide                        
show_trending_add_options = () => {
    let trending_options_div1 = document.getElementsByClassName('add_trending_playlist_fav');
  let trending_options_array = [trending_options_div1[0],trending_options_div1[1],trending_options_div1[2],trending_options_div1[3],trending_options_div1[4],trending_options_div1[5],trending_options_div1[6],trending_options_div1[7],trending_options_div1[8],trending_options_div1[9],trending_options_div1[10],trending_options_div1[11],trending_options_div1[12],trending_options_div1[13]]
  for (const element of trending_options_array) {
    if (element.style.display == 'none') {
        element.style.display = '';
    }
    else {
        element.style.display = 'none';
    }
  }
}

                         // Hide Trending Songs Options When Pointer Leave 
Hide_trending_songs_plus = () => {
let trending_options_div1 = document.getElementsByClassName('add_trending_playlist_fav');
let trending_options_div_array = [trending_options_div1[0],trending_options_div1[1],trending_options_div1[2],trending_options_div1[3],trending_options_div1[4],trending_options_div1[5],trending_options_div1[6],trending_options_div1[7],trending_options_div1[8],trending_options_div1[9],trending_options_div1[10],trending_options_div1[11],trending_options_div1[12],trending_options_div1[13]]
    for (const element of trending_options_div_array) {
        element.style.display='none'
    }
}
