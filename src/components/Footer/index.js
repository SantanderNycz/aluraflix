import React from "react";
import { FooterBase } from "./styles";

function Footer() {
  return (
    <FooterBase>
      <h2 id="jean">Jean Carlos De Meira</h2>
      <p>
        Criado por{" "}
        <a href="https://github.com/santandernycz">Léo Santander Nycz,</a>
        durante o{" "}
        <a href="https://www.alura.com.br/">
          Curso Oracle ONE - Desenvolvido pela Alura.
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
