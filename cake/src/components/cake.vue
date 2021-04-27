<template>
    <div class="container">
        <div class="row">
            <div class="col" style="margin-top:30px;">
                <div class="card h-100" style="width:18rem;" >
                        <img class="card-img-top" src="" alt="">
                    <div class="card-body">
                        <h5 class="card-title fontKanti" style="font-size: 25px;cursor: pointer" >
                            <b>
                                ds
                            </b>
                        </h5>
                    </div>
                    <div class="card-footer" >
                        <label class="label20 fontKanti" for="">ราคา</label>
                        <label class="label20 fontKanti" style="color: orange;" for=""></label>
                        <label class="label20 fontKanti" for="">บาท</label>
                        <a href="detailProduct.php?name=<?php echo $id[$index];?>" class="btn btn-danger fontKanti">ใส่ในตะกร้า</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
