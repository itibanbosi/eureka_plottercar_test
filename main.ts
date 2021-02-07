input.onButtonPressed(Button.A, function () {
    eureka_plotter_car.plottercar_pen(pen_onoff.下げる)
    for (let index = 0; index < 5; index++) {
        eureka_plotter_car.plottercar_1sou_forward(4)
        eureka_plotter_car.plottercar_R_cycle(60)
    }
    eureka_plotter_car.plottercar_1sou_forward(4)
    for (let index = 0; index < 2; index++) {
        eureka_plotter_car.plottercar_R_cycle(120)
        eureka_plotter_car.plottercar_1sou_forward(8)
        eureka_plotter_car.plottercar_R_cycle(120)
        eureka_plotter_car.plottercar_pen(pen_onoff.上げる)
        eureka_plotter_car.plottercar_1sou_forward(4)
        eureka_plotter_car.plottercar_pen(pen_onoff.下げる)
    }
    eureka_plotter_car.plottercar_R_cycle(120)
    eureka_plotter_car.plottercar_1sou_forward(8)
    eureka_plotter_car.plottercar_R_cycle(150)
    eureka_plotter_car.plottercar_1sou_forward(2.3)
    for (let index = 0; index < 5; index++) {
        eureka_plotter_car.plottercar_L_cycle(60)
        eureka_plotter_car.plottercar_1sou_forward(2.3)
        eureka_plotter_car.plottercar_R_cycle(120)
        eureka_plotter_car.plottercar_1sou_forward(2.3)
    }
    eureka_plotter_car.plottercar_L_cycle(60)
    eureka_plotter_car.plottercar_1sou_forward(2.3)
    eureka_plotter_car.plottercar_pen(pen_onoff.上げる)
    eureka_plotter_car.plottercar_R_cycle(120)
    eureka_plotter_car.plottercar_1sou_forward(2.3)
    eureka_plotter_car.plottercar_pen(pen_onoff.下げる)
    eureka_plotter_car.plottercar_R_cycle(60)
    for (let index = 0; index < 3; index++) {
        eureka_plotter_car.plottercar_pen(pen_onoff.上げる)
        eureka_plotter_car.plottercar_1sou_forward(4.6)
        eureka_plotter_car.plottercar_pen(pen_onoff.下げる)
        eureka_plotter_car.plottercar_L_cycle(120)
        eureka_plotter_car.plottercar_1sou_forward(2.3)
        eureka_plotter_car.plottercar_L_cycle(120)
    }
})
input.onButtonPressed(Button.B, function () {
    eureka_plotter_car.plottercar_pen(pen_onoff.上げる)
})
eureka_plotter_car.plotter_degree(0)
