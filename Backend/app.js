const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const Dispensaries =
[{id:1,key:false,name:"مجمع عيادات سلامتي",img:"https://2u.pw/IAosQ",Location:"عرعر- حي المحمدية ",location1:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.8936415498442!2d41.02320273486259!3d30.973450131553985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x156c0deaeda83835%3A0x80bc90584c999fc!2z2YXYs9iq2YjYtdmBINiz2YTYp9mF2KrZitiMINin2YTZhdiz2KfYudiv2YrYqSDYp9mE2LTYsdmC2YrYqdiMINi52LHYudixIDczMzEx!5e0!3m2!1sar!2ssa!4v1637131553820!5m2!1sar!2ssa" ,service:["عيادة جلدية ","عيادة الليز ","عيادة التجميل"],times:["9:00am - 12:00pm", "1:00pm - 9:00pm "] ,phto:["https://2u.pw/u3qyg", "https://2u.pw/IDD3G","https://2u.pw/AgleZ"], comment:[]},
                    {id:2,key:false,name:"مجمع اماس الطبي",img:"https://2u.pw/zLGr0",Location:"عرعر- حي العزيزيه", location1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.0765915324296!2d41.029652984862274!3d30.996241481546075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x156c0c3188f05c1b%3A0xfefd833f0b95646a!2z2YXYrNmF2Lkg2KfZhdin2LMg2KfZhNi32KjZiiDYqNi52LHYudix!5e0!3m2!1sar!2ssa!4v1637131863865!5m2!1sar!2ssa" ,service:["عيادة جلدية ","عيادة أسنان ","عيادة العظام","عيادة المسالك","عيادة الباطنية"," عيادة النساء والولادة "],times:["9:00am - 12:00pm", "1:00pm - 9:00pm "],phto:["https://2u.pw/DJUAW",
                    , "https://2u.pw/h5Cbr","https://2u.pw/jfRpN"],comment:[]},
                    {id:3,key:false,name:"مجمع سحاب الطبي",img:"https://2u.pw/wRLs4",Location:"عرعر-حي الناصرية",location1:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.0830394232257!2d41.05161718486289!3d30.968164781555735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x156c0ff3e49d2961%3A0x9e731c3362646c6b!2z2YXYrNmF2Lkg2LPYrdin2Kgg2KfZhNi02YXYp9mEINin2YTYt9io2Yo!5e0!3m2!1sar!2ssa!4v1637131961000!5m2!1sar!2ssa" ,service:[" عيادة طؤارى" ," مختبر","عيادة أشعة","عيادة أطفال","عيادة جلدية","عيادة باطنية","عيادة أسنان","عيادة طب عام","عيادة عيون ","عيادة جراحة"],times:["9:00am - 12:00pm", "1:00pm - 9:00pm "],phto:["https://2u.pw/sRSIc", "https://2u.pw/7drvN","https://2u.pw/U49Hp"],comment:[]},
                    {id:4,key:false,name:"مستوصف الخناني الطبي",img:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBUQEBAQFRIXFhcVFRYQFg8XGBUWFRIWGRUTGBgYHSggGholHRgXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGyslICUvLS0tKy0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAHMBtwMBIgACEQEDEQH/xAAcAAEBAQEAAwEBAAAAAAAAAAAABQYEAQMHAgj/xAA+EAABAwIFAgMGAwQJBQAAAAABAAIDERQEEhMhYQUxBkFRIjJxgZGhB7HBQlJi0RUjJDNygqLh8BclU9Lx/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwUEBv/EADMRAAIBAgQCCQQBBAMAAAAAAAABAgMRBBIhMUFRBRNhcYGRocHwIjKx0eEUQmLxI3KS/9oADAMBAAIRAxEAPwDF2nCWnC0FlwllwgM/acJacLQWXCWXCAz9pwlpwtBZcJZcIDP2nCWnC0FlwllwgM/acJacLQWXCWXCAz9pwlpwtBZcJZcIDP2nCWnC0FlwllwgM/acJacLQWXCWXCAz9pwlpwtBZcJZcIDP2nCWnC0FlwllwgM/acJacLQWXCWXCAz9pwlpwtBZcJZcIDP2nCWnC0FlwllwgM/acJacLQWXCWXCAz9pwlpwtBZcJZcIDP2nCWnC0FlwllwgM/acJacLQWXCWXCAz9pwlpwtBZcJZcIDP2nCWnC0FlwllwgM/acJacLQWXCWXCAz9pwlpwtCMD5+Xqdh9Us2/vD5b/7Kk6kIfc0jalh6tX7It9yf+jPWnCWnC0Fq2vvbfBebNvk4fMKixFJ7SRtLo/FR1dN/n3M9acJacLQWXn5cbpZcLa6eqPG1Z2Zn7ThLThaCy4Sy4QGftOEtOFoLLhLLhAZ+04S04WgsuEsuEBn7ThLThaCy4Sy4QGftOEWgsuEQGksuEsuFpLPhLPhAZuy4Sy4Wks+Es+EBm7LhLLhaSz4Sz4QGbsuEsuFpLPhLPhAZuy4Sy4VDrsOKaGHCRRvJLg7Oe3snKe42r+nrVd+Dwz3RtdIzK8tBc0GuU03FVCetizh9KloQLLhLLhaWy4UXr/ULV8IML3iRzgS2lRQCgFe5qRt6ApKSirsQhKbyx3OSy4SyWks+FH6z1EYeeGIxPcJairfI1aG0r33PZJSUdxCEpvLFanHZcJZcKthZ2yYmbDtG8LYy4/xPzGnyAb9V3WfCJpkSi47/LmbsuEsuFpHYTatCeB3PAUmLqTLR+LkjkjazMHNePazNdlyj1qaD4nhG0tCYwlLZdnmcNlwllwqpxkTGwGZwY6fLkBrTMW5qV8huBv6hULPhTchxa3M1ZcJZcKx0fER4mPUizUDi0h7S0gtO4IK48b1ER4yPCmJ5EjQQ4D9ouIA5Apv6VCq5JallTm5ONtVrbuVzjsuEsuFX6dM2aSdjRtE8R19TlBcfqSPkvPV8PM2Iuw0bXyAijX1FW1GYDmlf+bKbq1yMjvlZHsuEsuFZ6Rh53RVxMbWSZiKNNQQDs7j/avmuyy4RO6uRKOV2ZmrLhLLhaaz4Xiz4UkGasuEsuFprPheLPhAZqy4Sy4Wks+F5s+EBmrLhLLhaWz4Xiz4QGbsuEsuFpLPhLPhAZuy4Sy4Wks+EOD4QGbOC+HzU3E4ho2YAf4j2+QXv631LO4sj/uwe/75Hn8PRSly8RjG/phtzPpej+iYxSqV1ry5d/64dp+nSE7k/VeF1dOwD5n5IxzU1o0epKs9U6dJhYWvw0bZZi9rDqAn39hlAIp7WUd/NY4fCzry082e/GdIUsIrPV8Ir35EaLp0rtw0gertvsd17x0Z3mW/6v5LjPiacEh8vSmU2OaeMkHzBDJSfsuTHeN3abRh8RgHS6zWPzNmYwMeKBwMjhmaHVzOHYU+J6D6NpwV5Sv3M4c+nMRJ/SkvC/v+it/Rcrd2kV4ND99l+mOynLK0t9HU2P8Az1C43+Mmvc63xXTy0EgCcTxOpXbd7g13xB+i92C6zi5nNYGYGWMyMY8wvZKGh7vMMlNNgTuPJbQwGXWlNLsbv88NTGfSfXK2Igpdq0ku1O9vMpjB+m4Sy4VmPphjPsVMfm3clnLePVvzHoeuzVoybWqszw1IKL+l3T25+K4GbsuEsuFpLPhLPhWMzN2XCWXC0lnwlnwgM3ZcJZcLSWfCWfCAzdlwi0lnwiA0FqlquzMmZAcdqlquzMmZAcdqlquzMmZAcdqlquzMmZAfNvGXWZJRNhsG0hsJAxE2ZoocwBiYO5NTufKhWg631puHwkeKLc4eYh7PkJKEvPAAPzoFx4v8PIHSSSNmlaXuc8hwa6jnuLjvsaVKmYnwDGwgz46NooaZhl90Vr7Tuw2JXlcqqk2lp3r5tY6kY4SUIrPa2r0d3dK69DSeIeptwghJbmEszIqilGhx9p5+XZTvHQbGcHId8uKaSG7ucA0ktaO5JoB8wpz/AMPGhwMmMbVxysBBFXkbDd2+wOw3Xn/pqc2e5bUdvZft8PaSUqsk1l9UKdLDQkn1u3+MtV/o8dX6h1OEsxT44Y8NmA0fZc/Ke2o7ycRX3TQHyVLxQwDE9OeOxnLfk8NXEPw5JeC/F1bUVAa7tXelXUquzpPgQQ4qPEOnzhhzBuUjem2+Y8eXko/5XdNaO27WmtyX/SxScZq6vtF63Wi7z99Ewn/dMfttSD6mMbfZaa1X4wGAbHLiJq1dPI154DIWRtb/AKSf8y4P6XY3qL4HvaymGjdHmIAJdJJnpU96Bn0PK9C+jfi3+TwTbqO64JekUUrYLCdY6i7E9P6hnjDNGcQtHq1s0YBPJIcoWG8L6+NfA3GNlJzSPljzlrSSSQRXvUgbE9+KLc4Lwa1mAmwWtvK7MZA3sQWluxO/uiu/mVlnlO6S0V/wevqqVDLKUrt5Wlrornp6jjIoIMDqRNeJHwMaTlIjJj/vPiBWnxXu8WYjFwxg4LDtkPd7nkENaPIMzBzj8OwUhv4b71diq0Hs0Y6ldt6F3alV+Hfhq4mt137+y/8A91XNVtbL6ot1WFTT6xPV7xdnc9/RvGeGLQ3Et0HnclrXOjcTuSC0EivP1K6urRAdUwVP245R9KEbfNfvFeAoTE1kUjmyDvI+rs3GWoA+S8+HfBQw2JGJfNqFocGihFC4UrUk+VUXXO0ZLlr4iawivOlJrRrK09bprTz4+558KYX+04/bYYoj55a0+4Xq8U9XeyQ4HCMzYp0ReXEta2FhqA85vedsaNHC03SsCIRJT3pZpJnHl7th8mho+Sh9c8Ew4nEOxJlla9waHD2XCjRT2a7jbn9VrJTULR3PPGdOVXNUdl3X1SODpnUdLo4xJ9uSOJwoakue1xa2vn+7Vezwj0bEty4mXHCdsrcz2HMWgubVpj32IOxFAO64Zvw3J2uhlrsCx3yr7VCvbh/w7pLG92Iq1r2uLQ1wzBrgS33vOn3WMXVus0X5o9U44ZKeSotXf7Xty7P5P14o6xiIsRp4VjHRwNZLii6lcsjqNY3f0BO3ao8lW6/1UQRx6LBLPO4Nw8dfeJFcx9Ggbk/BZfxrgMKcRNiG4tomeWMdBSrzI1rWAUrUDKGmpFD3FahdR/DshglbObgULRuGjb3a1qHV8+3Cl1Kim0lfxRWOHw/VQlKVnts/XsXPloWfC+JxEjJ24xsWtC/KRB5jIHACp+h+ChP8UYvD4hzcbg2tiJq0RkF4b5HNmLX+Vey8Q+BJ52mXEYgsle4lwcMx22BJa4A1/JdXTvBeGgmYzFYrO6Sojj9pmctFTvUk0HpRRmrOKsmu1+/Ev1eEjOWaSattFPdLXK9u0v8ASerYbEtc6GWoYKvzB7Mnf3swHoVmcN1bESTsxzZG/wBHvmtmR7VLTsJiO4JIJA9ANt11Tfh21zz/AGikRdXKGnNlr7tc1K02rRfrD+ARFiI3Ryk4drg9zHEh1WbtBps7fauxG6lyrNfbbxXn3epWNPCRbtO+mzT8tt+T2NdaJarszJmXqOWcdqlquzMmZAcdqsx44x2lGImGj5O/qGA7/U7fCq2eZfJPFGN1sXK+tQHZG/4WbfmCfmvJjKmSnZbs6vRGHVWveW0df1+/AlL3YPDuke2Ngq5xAA5/kvStr+HXTwXPxLh29hnxNC4/Sg+ZXLo0+smo/LH02LxCw9GVTlt38DR9J6IyCIRt3PdzvNzvMr34vpjJI3RvByuFDQkHfzBG4I7g+qo5kzLvRWVJR0sfDTnKcnKTu3ufG/EHgtxnEeNgMsbjVuMgyxyBrWku1yGkO9lvm2pI2O5WNZ4Uws0bZ8OMcIH4iGFj57UB4km03BtD7w3O9B60X9KuIIIIBB2IPYj0X83eNulYXD9TxMU8boozLA+JmFLS0QOcBKab5XloqAabk+VFpOebW1ip7+n+FsEXSxOg6i7FQ5HnDyOgbnY54aANNrnHdzagFpo6oK+qeDPC8sQE2IZHERXSw8DWtjizDd5DfekI2qSSB5+k78DOltj6ecQ6KISSyPyyNIc98QpQPIJoQ4O227CoX0jMpU7Rsl48QcdqvIwo9F15kzLMHHaparszJmQHHaparszJmQHHaparszJmQHHaouzMiA49dNdSLnlLnlAV9dNdSLnlLnlAV9dNdSLnlLnlAV9dNdSLnlLnlAV9dSuudEw2MyHER5iyuUgkEZhQio8uxpwF+bnlLnlQ0nuWjKUXeLsz2Yvo+Gljhikjq2EtdF7TqtLKAe1WtKDf1VPXUi55UzqnUsRla7CMikFXB+o4tpl2FPXcEfRLJakrNN5b+e38XNXrprrE+K+rkYOcRPpK0NY7Kd2ahAND60cd1abj2ghhcMxGanmQKAmnpuPqid3YODUc3zh+y3cLNeL+k4ScslxMwid/dhxLaOBqQwg+m5HzU/wlI9rZw+WR/wDaJQA81ygOrt8a19F1Olw2OhDnta+MPJGfYtdG4g/DsfiCqO1SNnxNoOVCrdN6cV2r3KXhjpmGw0VcNRweA4yVBLx5bjy4Cta6zvTXxRxMbBlEVPYodjm3qCe9a1XL1HxVh4HiOST2zSoaHOyg9i6nuj4qytGPIznnqVG9W/U1eumus5i+vwxvjjfIA6U+wNzXmo7DsK8rqdjQCATuTQD1IBP5BSmmZ2a3LOumuslgesTta92NZDE0Foa6N5cHZnZaUPNPqvV03qLzjcXnf7DBA1oPZoDZHOP1PfgKM60L9U9ezx4pe5sRiB6heddY3wv1TDOjezCiQMY8n+srvnJdmbUmje9Bt8F39T67Fh2Z5X0B90CpLj6NA7opK1yJU5KWWzv3Gj11511k3+KMOMO3EmSkTiGjZ1cxNKZaVqP0Xiaec4mN7MTEIHAf1TmgudRri4td382n5fVmXAdW+Om+9+HAs4ro2GkxDMU+MGZnY1O9PdLh2JHkqmuoR6i0PEeYZy0uA88rSAT8KkL1M6zEclJGnO5zWUPvOZmzAfDK76JomyG5NK93y7jRa65cZhYZXRvljY50bs8ZPdrvUfy7VAPcBQOoeI4oZY4nl+aQ/sgEMBNA55rsCdvNUbnlTo9BaUbS58SvrprqRc8pc8qSpX1011IueUueUBX1011IueUueUBTxOLysc70aT9ASvkBNTU9yvo2LmzRvaPNjh9WlfOPNczpC94+P5PpOgUstR9q9wvpXg8BmDZ6uzOPzJp9qL5qt70DE/2aMejafQlUwNusfcbdON9RFf5ezNPrprqRc8pc8rrHypX118G/FSamKuW5ozI50chjy+1JhpvZzAnZwiMTgfOo7L7Fdcr5h4nxEb8VKzHQFzBK2aMRhoqWNDfaJ7skYGhx7+yPTbWnTc00tyG7G8/DgCHBjChgbpBgdQk/1skTZJgT5kOce224HktVrrD+BsfK/DudM0DNK9zSBTMHUJPwzEgH0C0Nzyoqxyza5ElfXTXUi55S55WYK+umupFzylzygK+umupFzylzygK+umupFzylzygK+uikXPKICJdJdKJcpcoC3dJdKJcpcoC3dJdKJcpcoC3dJdKJcpcoC3dJdKJcpcoC3dcrOMjx0YLIpmZMzi3MAdnOJ8xXzXRcpcqsoX4vwNadXJfRO/NXOZvT5nQziVzDLMWE0oAdOlOwoO32Xg4fFmUT6keo1hjHue6d9xSh3XXcrlMLNXW3z/E02BHb5/ZZOjtZvzPRDFu7zJW/634JW7mj2xRYqOAiORondMZHn2aHMKHalPIFc0WExbGPa2SMahc54oylXbO2ptXhdtyvxiXh7Sx1cpFDQkKzpKys3p2lYYtpu8Y6vXS/v2HGOnYoMiYJWhsJq2hHcAgeW9AT3X6j6fiRGYgYi1xq8nIXONa5nOpUnldOFLY25GVoK9yT3PK9lyqqgub8zT+ukpaRj/5t789Tj6nA8PBa9hbkiioaZg6M1bSu4PnsqvWhM8xvw7w17HO703Dm0PfZTpIYzIJi32wKA/lX1oum5Uxp2zdtjOeJuoWWsb3utHfn4L1OLEYfGzARzSRmMuaTQNB9lwNagVXu6jg53PmMTmhkwAdWlSA0tI37dz9V77leLlS6Ke7YWMknpGNtdLaa2/Rx2GJ03xiRgD2hrz6tDcoFQKjb0SDB4ljtQPjc/KGAvyOLWgUytqNhwO67LlLlV/p0uL8y7x83/bHy/k4Z8G9kTfaiDmmR72nLSkjctQDt2r9dl+mYbEkxSB7RpNpH2qA5tCDtvt6r2Y2OOXLqNrlNR+o+C6blVVD6t2l3lnj3l+1N3bd1tvovOxx2+MMrZnSR52AtaQGDZ3cHahHnuvXH0ucBgD2DI8ytpTZ7q1A22G527KhcrxcqzoLm/MosbKOijHy+fGcbsBicz3Oka8zZQ/b3Q01bTbsOOVp7rlRbleLlaQpqNzGtXdRJNJWvsrblu6S6US5S5VzAt3SXSiXKXKAt3SXSiXKXKAtnFLJ4uPK9zfQmnw8vsqNyuPH7nP8AI/Lz/T5LxY6GaCly/B2ehK+Ss4P+5eq+M5FoehYukZZ+6fs7f86rPLowk+R1fI7H4eq5+HqdXUTe2x3ekMO6+HlBb7rvRqrrlevEdRawVcT/AJQ5xPwAFVIuV78OyR+7GOdVwYKebiCQ0epoCV3k1xPiSf1DxVN2gw0o/ilY/wCzR+p+SzGOdiZnZpmzvPlVj6AegFKD5L6fhekzGKUSwPjLWGRsjw/9gf3dO2++66JuivGIjEcD5ISIySS4NJcBmq8VoPPZeqnio0/tgvNlcvafOem9bxsIDckr2D9mRkh29A6lR91psB4jEmz4po3fxseW/JwH5gLU4Dw292tnaAaubEH6oAodpMwHb86LgxHSjFh5HTtkbI2VjWvFcjmuNCQD3Hf7KlStCe8LPsYSPTdJdLi64Gw4iSJvutIAr6ZQf1XDcrzli3dJdKJcpcoC3dJdKJcpcoC3dJdKJcpcoC3dIolyiAiXKXKj3CXCAsXKXKj3CXCAsXKXKj3CXCAsXKXKj3CXCAsXKXKj3CXCAsXKXKj3CXCAsXKXKj3CXCAsXKXKj3CXCAsXKXKj3CXCAsXKXKj3CXCAsXKXKj3CXCAsXKXKj3CXCAsXKXKj3CXCAsXKXKj3CXCAsXKXKj3CXCAsXKXKj3CXCAsXKXKj3CXCAsXKXKj3CXCAsXK8txXr281GuEuFDSasyYycWmt0XTx2/JeFKw+Pyn1HmP1CpxSNcKtNR+Xx9FxsRhnTd1sfY9H9IRxKUXpPiufavlz3B+1Pp/I/8/20HhrxPDBE6HEscaPzx5W1LSWkOObOD6ffdZtHAEUO4/L4LTD4zIsstUefH9Eqs+spaS4rg/59OZQ6j4oxMxfnmfkfWrGkhlP3aei/DfE2KAyjEzAAUAD3dh5KQ/Bfuu+Th+o/kvUcHJ/D9V0I4ik9pI4M+j8VB2dN+Gv4LjvE2KNK4mY0NR7btj6/devF9enlbllnke2taPcSKjsaKS3BP8y0fU/ovbpsYMzzX4134A81DxNNaJ3fJakw6PryWaUcq5y0Xrqdhnc8mR7ia7lzjUn+ZXpfi6nbYeimYnqGY+g8h/Nei4Wsc278jzVMidoapcefcuC5cefJWLlLlR7hLhWMyxcpcqPcJcICxcpcqPcJcICxcoo9wiAla6a6nayayAo66a6nayayAo66a6nayayAo66a6nayayAo66a6nayayAo66a6nayayAo66a6nayayAo66a6nayayAo66a6nayayAo66a6nayayAo66a6nayayAo66a6nayayAo66a6nayayAo66a6nayayAo66a6nayayAo66a6nayayAo66a6nayayAo66a6nayayAo66a6nayayAo66/cWLLTVpIPCl6yayA02H6+e0ja8t2+3b8l3x9XgP7dP8AECPv2WK1k1l5Z4OlJ3tbuOlR6WxVNWun3q/rozcf0nD/AORv3X4f1eAft14aHf8Az7rFayayosDS7TaXTeIa0UfK/uafEdf8mNpy7f7eX3UyTFlxq4kn1Kl6yay9MKUIfajnV8VVru9STZR1011O1k1loYFHXTXU7WTWQFHXTXU7WTWQFHXTXU7WTWQFHXRTtZEByoiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiID/9k=",Location:"عرعر- حي العزيزية",location1:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.415461944214!2d41.02201443486242!3d30.986790631549326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x156c0dc82e748fc9%3A0x35b662c562a68b6!2z2YXYs9iq2YjYtdmBINin2YTYrtmG2KfZhtmK!5e0!3m2!1sar!2ssa!4v1637132034453!5m2!1sar!2ssa",service:[" عيادة طب العيون " , " عيادة طب الاسنان ", "عيادة طب العظام", " المختبر" ,"عيادة الباطنية ", "عيادة الاشعة " ,"عيادة الامراض الصدرية ","عيادة الانف والاذن والحنجرة"],times:["9:00am - 12:00pm", "1:00pm - 9:00pm "],phto:["https://2u.pw/g0Eec", "",""],comment:[]},
                    {id:5,key:false,name:"مجمع لين الخاص الطبي",img:"https://2u.pw/JrXzF",Location:"عرعر- حي المحمدية ",location1:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.2775617785296!2d41.048605584863!3d30.962735581557652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x156c0fe32b40c861%3A0x809cb14414be7bfe!2z2YXYrNmF2Lkg2YTZitmGINin2YTYrtin2LUg2KfZhNi32KjZig!5e0!3m2!1sar!2ssa!4v1637132226342!5m2!1sar!2ssa",service:[ " عيادة طب الاسنان ", "عيادة طب العظام", " عيادة النساء و الولادة" ,"عيادة الباطنية ", "عيادة الاشعة " ,"عيادة الامراض الصدرية ","عيادة الانف والاذن والحنجرة"],times:["9:00am - 12:00pm", "1:00pm - 9:00pm "],phto:["https://2u.pw/rWFKC", "https://2u.pw/Q9ltL","https://2u.pw/69exi"],comment:[]},
                    {id:7,key:false,name:"مجمع اليحيي الطبي",img:"https://2u.pw/jLpHZ",Location:"عرعر-حي المساعدية",location1:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109455.81342696185!2d41.13092584185362!3d30.984595160835664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x156c0d979b4a0abd%3A0x8ffeda2b6cc3e947!2z2YXYs9iq2YjYtdmBINin2YTZitit2YrZiQ!5e0!3m2!1sar!2ssa!4v1637132304991!5m2!1sar!2ssa",service:["عيادة الاسنان ","عيادة طب عام  ","عيادة الاطفال"],times:["9:00am - 12:00pm", "1:00pm - 9:00pm "],phto:["https://2u.pw/0gBqS", "https://2u.pw/PkFrd","https://2u.pw/3bcKQ"],comment:[]},
                    {id:8,key:false,name:"المهيدب لطب الاسنان ",img:"https://2u.pw/ga7cp",Location:"عرعر-حي المساعدية",location1:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.9686502227914!2d41.017568684862724!3d30.971357031554625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x156c0d0f98c00443%3A0xaa603e184f5a686a!2z2KfZhNmF2YfZitiv2Kgg2YTYt9ioINin2YTYo9iz2YbYp9mG!5e0!3m2!1sar!2ssa!4v1637132369775!5m2!1sar!2ssa",service:["عيادة الأسنان  ","عيادة جلدية ","عيادة التجميل"],times:["9:00am - 12:00pm", "1:00pm - 9:00pm "],phto:["https://2u.pw/KTYbs", "https://2u.pw/hk85P","https://2u.pw/IbIxL"],comment:[]},
                    {id:10,key:false,name:"مجمع الخبرة الطبي ",img:"https://2u.pw/a4G0q",Location:"عرعر-حي المساعدية",location1:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27364.721542480074!2d41.0389332!3d30.9819165!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x156c0dc7abe0a8b7%3A0x94b2d0e9c22889e2!2z2YXYs9iq2YjYtdmBINin2YTYrtio2LHYqQ!5e0!3m2!1sar!2ssa!4v1637132444106!5m2!1sar!2ssa",service:["عيادة جلدية ","عيادة الليز ","عيادة التجميل"],times:["9:00am - 12:00pm", "1:00pm - 9:00pm "],phto:["https://2u.pw/VGFaY", "",""],comment:[]},
                  ]
app.get("/Dispensaries", (req, res) => {
  res.status(200);
  res.json(Dispensaries);
});
app.get("/dates/:id",(req,res)=>{
  let resArr = []
  const idd = req.params.id
  // console.log(idd)
for(let i=0;i<Dispensaries.length;i++){
  if(Dispensaries[i].id == idd){
    resArr.push(Dispensaries[i])
  }}
  res.status(200)
  // console.log(resArr)
res.json(resArr)
})
app.post("/like/:id",(req,res)=>{   //l
  const id = req.params.id
  // console.log(id)
for(let i=0;i<Dispensaries.length;i++){
  if(Dispensaries[i].id == id){
    if(Dispensaries[i].key==true){
      Dispensaries[i].key=false}
      else{
        Dispensaries[i].key=true
    }  //l
  }}
  res.status(200)
res.json(Dispensaries)
})
const users = [
  { UserName: "rawan", PassWord: "1234" },
  { UserName: "ibtisam", PassWord: "1234" },
  { UserName: "raghad", PassWord: "1234" },
];
app.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  for (let i = 0; i < users.length; i++) {
    if (users[i].UserName === username && users[i].PassWord === password) {
      res.send("welcome");
    }
  }
  res.status(200);
  res.json(" Please enter the correct username or password ");
});
app.get("/comment/:id", (req, res) => {
  const id=req.params.id
  for(let index=0; index< Dispensaries.length;index++){
    if(Dispensaries[index].id == id){
      res.status(200);
      res.json(Dispensaries[index].comment);
    }
  }
  res.status(200);
  res.json("id not found");
});
app.post("/comment/:id", (req, res) => {
  let comment = req.body.comment;
  const id = req.params.id;
  console.log(id,"idddddd");
  for (let index = 0; index < Dispensaries.length; index++) {
    if (Dispensaries[index].id==id) {
      Dispensaries[index].comment.push(comment)
      res.status(200);
  res.json(Dispensaries[index].comment);
    }
  }
});
const port = 5000;
app.listen(port, () => {
  console.log("server is running");
});