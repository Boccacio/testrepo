var express = require('express');
var router = express.Router();

const anaSayfa = function (req, res, next) {
    res.render('anasayfa', {
        "baslik": 'Anasayfa',
        "sayfaBaslik": {
            "siteAd": "MekanBul",
            "slogan": "Civardaki Mekanları Keşfet"
        },
        "mekanlar":[
            {
                "ad": "Starbucks",
                "adres": "Cenatrum Garden AVM",
                "puan": "3",
                "imkanlar": ["Kahve","Kek","pasta"],
                "mesafe": "5km"
            },
            {
                "ad": "Gramafon",
                "adres": "Gramafon",
                "puan": "4",
                "imkanlar": ["Kahve","Çay","Kurabiye"],
                "mesafe": "3km"
            }
        ]
    }
    );
};


const mekanBilgisi = function (req, res, next) {
    res.render('mekanbilgisi',
     { 
        "baslik": 'Mekan bilgisi',
        "mekanBaslik": "Starbucks",
        "mekanDetay": {
            "ad":"Starbucks",
            "adres": "Centrum Gardan AVM",
            "puan": "4",
            "imkanlar": ["Kahve","Kek","pasta"],
            "koordinatlar": {
                "enlem": "37.7",
                "boylam": "30.5"
                },
            "saatler": [
                {
                    "gunler": "Pazartesi-Cuma",
                    "acilis": "9:00",
                    "kapanis": "22:00",
                    "kapali": false
                },
                {
                    "gunler": "Cumartesi-Pazar",
                    "acilis": "10:00",
                    "kapanis": "23:00",
                    "kapali": false
                }

            ],
            "yorumlar": [
                {
                    "yorumYapan": " Enes ",
                    "puan": "4",
                    "tarih": "13 Ekim 2022",
                    "yorumMetni": "Kahveler güzel."
                }
            ]

        }
     });
};

const yorumEkle = function (req, res, next) {
    res.render('yorumekle', { title: 'Yorum ekle' });
};



module.exports = {
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}