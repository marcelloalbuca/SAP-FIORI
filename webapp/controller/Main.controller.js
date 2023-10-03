sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel ) {
        "use strict";

        return Controller.extend("brasileirao.controller.Main", {
            onInit: function () {

                var dadosGerais = {

                    nomeCampeonato : "Brasileirão 2023 o canal FioriNET",
                    rodada: 99

                };

                var dadosModel = new JSONModel();
                dadosModel.setData(dadosGerais);
                var tela = this.getView();
                tela.setModel(dadosModel, "ModeloDadosGerais");


































              /*
                var time = "Cruzeiro";
                var anoFundacao = 1921;
                //debugger
                var elenco = ["Anderson","Arthur Gomes","Bruno Rodrigues","Felipe Machado"];
               
                var meuTime = {
                    nome : "Cruzeiro",
                    tecnico : "Zé Ricardo",
                    anoFundacao : '1921',
                    elenco : ["Anderson", "Arthur Gomes","Bruno Rodrigues","Felipe Machado"],
                    cores : "azul e branco"

                };

                var timeSerieA = [
                    {
                        nome : "Cruzeiro",
                        tecnico : "Zé Ricardo",
                        anoFundacao : '1921',
                        elenco : ["Anderson", "Arthur Gomes","Bruno Rodrigues","Felipe Machado"],
                        cores : "azul e branco"
                    },

                    {
                        nome : "Botafogo",
                        tecnico : "Zé Ricardo",
                        anoFundacao : '1921',
                        elenco : ["Anderson", "Arthur Gomes","Bruno Rodrigues","Felipe Machado"],
                        cores : "preto e branco"
                    },


                ]
                
                //debugger*/

            }
        });
    });
