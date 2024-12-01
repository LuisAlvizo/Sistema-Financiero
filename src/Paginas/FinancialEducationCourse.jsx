import React, { useState } from "react";
import { Card, Row, Col } from "react-materialize";
import { Pagination } from "@mui/material";
import {
  AiOutlineWallet,
  AiOutlineStock,
  AiOutlineBank,
  AiOutlineBook,
  AiOutlineBulb,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { MdSavings } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import '../CSS/FinancialEducationCourse.css'

const FinancialEducationCourse = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const courseContent = [
    {
      title: "Introducción a las Finanzas Personales",
      content: `
        Aprende los conceptos básicos para gestionar tus finanzas: cómo crear un presupuesto, entender tus ingresos y gastos, y establecer metas financieras realistas.`,
      detailedContent: (
        <div>
          <h5>¿Qué son las Finanzas Personales?</h5>
          <p>
            Las finanzas personales son la gestión eficiente de tus ingresos,
            gastos, ahorros e inversiones. Su objetivo es mejorar tu estabilidad
            económica y ayudarte a alcanzar metas financieras a corto, mediano y
            largo plazo.
          </p>

          <h5>Componentes Clave</h5>
          <ul>
            <li>
              <strong>Presupuesto:</strong> Una herramienta fundamental para
              planificar y controlar tus ingresos y gastos.
            </li>
            <li>
              <strong>Ahorro:</strong> Reserva parte de tus ingresos para
              emergencias, metas específicas y el futuro.
            </li>
            <li>
              <strong>Inversión:</strong> Hacer crecer tu dinero a través de
              instrumentos financieros como CETES, fondos de inversión o acciones.
            </li>
            <li>
              <strong>Gestión de Deudas:</strong> Mantén tus deudas bajo control y
              prioriza las deudas de interés alto.
            </li>
            <li>
              <strong>Metas Financieras:</strong> Establece objetivos claros como
              comprar una casa, viajar o jubilarte cómodamente.
            </li>
          </ul>

          <h5>Regla del 50/30/20</h5>
          <p>
            Una de las estrategias más populares para gestionar tus finanzas:
          </p>
          <ul>
            <li>
              <strong>50%:</strong> Necesidades (alquiler, alimentos, transporte,
              servicios básicos).
            </li>
            <li>
              <strong>30%:</strong> Deseos (ocio, entretenimiento, compras
              personales).
            </li>
            <li>
              <strong>20%:</strong> Ahorros e inversiones.
            </li>
          </ul>

          <h5>Herramientas Sugeridas</h5>
          <p>
            Puedes utilizar aplicaciones y plataformas para gestionar tus
            finanzas:
          </p>
          <ul>
            <li>
              <a
                href="https://www.fintonic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Fintonic <FaExternalLinkAlt />
              </a>
            </li>
            <li>
              <a
                href="https://mint.intuit.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Mint <FaExternalLinkAlt />
              </a>
            </li>
            <li>
              <a
                href="https://www.condusef.gob.mx/"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Condusef <FaExternalLinkAlt />
              </a>
            </li>
          </ul>

          <h5>Consejos Prácticos</h5>
          <ol>
            <li>
              <strong>Registra tus ingresos y gastos:</strong> Lleva un control
              mensual para identificar fugas de dinero.
            </li>
            <li>
              <strong>Prioriza el ahorro:</strong> Automatiza transferencias a tu
              cuenta de ahorros o inversiones.
            </li>
            <li>
              <strong>Evita deudas innecesarias:</strong> Limita el uso de tarjetas
              de crédito y préstamos para gastos superfluos.
            </li>
            <li>
              <strong>Fondo de emergencia:</strong> Asegúrate de tener entre 3 y 6
              meses de gastos en un fondo de acceso rápido.
            </li>
          </ol>
        </div>
      ),
      icon: <AiOutlineWallet size={150} className="icon-green" />,
    },
    {
        title: "Creación de un Presupuesto Eficiente",
        content: `
          Descubre cómo organizar tus ingresos utilizando la regla 50/30/20, que divide tus ingresos en necesidades, deseos y ahorros.`,
        detailedContent: (
          <div>
            <h5>¿Qué es un presupuesto eficiente?</h5>
            <p>
              Un presupuesto eficiente es una herramienta que te permite gestionar tus
              ingresos y gastos de manera efectiva para alcanzar tus metas financieras.
              Este proceso incluye asignar tus ingresos en categorías específicas para
              controlar gastos y fomentar el ahorro.
            </p>
      
            <h5>Regla 50/30/20</h5>
            <p>
              Esta regla divide tus ingresos mensuales netos en tres categorías:
            </p>
            <ul>
              <li>
                <strong>50% Necesidades:</strong> Gastos esenciales como vivienda,
                alimentos, transporte y servicios básicos.
              </li>
              <li>
                <strong>30% Deseos:</strong> Gastos no esenciales como entretenimiento,
                viajes y compras personales.
              </li>
              <li>
                <strong>20% Ahorros:</strong> Reserva para emergencias, inversiones o
                metas a largo plazo.
              </li>
            </ul>
      
            <h5>Herramientas para Presupuestar</h5>
            <ul>
              <li>
                <a href="https://mint.intuit.com/" target="_blank" rel="noopener noreferrer" className="link">
                  Mint <FaExternalLinkAlt />
                </a>: Ideal para rastrear gastos automáticamente.
              </li>
              <li>
                <a href="https://www.youneedabudget.com/" target="_blank" rel="noopener noreferrer" className="link">
                  YNAB <FaExternalLinkAlt />
                </a>: Enfocado en el control absoluto de tu presupuesto.
              </li>
              <li>
                <a href="https://www.condusef.gob.mx/" target="_blank" rel="noopener noreferrer" className="link">
                  Condusef Presupuesto <FaExternalLinkAlt />
                </a>: Recurso local para México con calculadoras y guías prácticas.
              </li>
            </ul>
      
            <h5>Ejemplo Práctico</h5>
            <p>
              Si tu ingreso neto mensual es de <strong>$20,000 MXN</strong>, así es
              como lo dividirías:
            </p>
            <ul>
              <li><strong>Necesidades (50%):</strong> $10,000 MXN</li>
              <li><strong>Deseos (30%):</strong> $6,000 MXN</li>
              <li><strong>Ahorros (20%):</strong> $4,000 MXN</li>
            </ul>
          </div>
        ),
        icon: <MdSavings size={150} className="icon-orange" />,
      },
      
      {
        title: "Ahorro e Inversión Básica",
        content: `
          Aprende sobre los CETES en México, cómo funcionan y cómo abrir una cuenta para comenzar a invertir con seguridad.`,
        detailedContent: (
          <div>
            <h5>¿Qué son los CETES?</h5>
            <p>
              Los CETES (Certificados de la Tesorería) son instrumentos de inversión
              emitidos por el Gobierno de México. Son seguros, de bajo riesgo y
              permiten a los ciudadanos invertir desde <strong>$100 MXN</strong>.
            </p>
      
            <h5>Ventajas de los CETES</h5>
            <ul>
              <li>Garantizados por el Gobierno de México.</li>
              <li>Fácil acceso a través de plataformas como <a href="https://www.cetesdirecto.com/" target="_blank" rel="noopener noreferrer" className="link">CETES Directo <FaExternalLinkAlt /></a>.</li>
              <li>Opciones de plazos flexibles: 28, 91, 182 o 364 días.</li>
            </ul>
      
            <h5>Cómo empezar a invertir</h5>
            <ol>
              <li>Regístrate en <a href="https://www.cetesdirecto.com/" target="_blank" rel="noopener noreferrer" className="link">CETES Directo <FaExternalLinkAlt /></a>.</li>
              <li>Vincula tu cuenta bancaria.</li>
              <li>Selecciona el plazo y monto a invertir.</li>
              <li>Confirma tu inversión y sigue los rendimientos desde la plataforma.</li>
            </ol>
      
            <h5>Ejemplo de Rendimientos</h5>
            <p>
              Si inviertes <strong>$10,000 MXN</strong> a 91 días con una tasa de interés anual del 7%, tus rendimientos serían aproximadamente <strong>$175 MXN</strong> al finalizar el plazo.
            </p>
          </div>
        ),
        icon: <AiOutlineBank size={150} className="icon-blue" />,
      },
      
      {
        title: "Introducción al Mercado de Acciones",
        content: `
          Explora cómo invertir en la Bolsa Mexicana de Valores, seleccionando acciones de empresas como Walmart México y entendiendo los riesgos.`,
        detailedContent: (
          <div>
            <h5>¿Qué es el Mercado de Acciones?</h5>
            <p>
              Es el lugar donde se compran y venden participaciones (acciones) de
              empresas públicas. Al adquirir una acción, te conviertes en copropietario
              de la empresa.
            </p>
      
            <h5>Pasos para Invertir en la Bolsa Mexicana</h5>
            <ol>
              <li>
                Abre una cuenta en una casa de bolsa autorizada como GBM+, Kuspit o
                Actinver.
              </li>
              <li>Familiarízate con empresas mexicanas como Walmart (WALMEX.MX).</li>
              <li>Define tu perfil de riesgo: conservador, moderado o agresivo.</li>
              <li>Realiza tu primera compra de acciones.</li>
            </ol>
      
            <h5>Riesgos a Considerar</h5>
            <ul>
              <li>La volatilidad puede afectar el valor de tus inversiones.</li>
              <li>Investiga las empresas antes de comprar acciones.</li>
              <li>No inviertas dinero que necesites a corto plazo.</li>
            </ul>
      
            <h5>Recursos Útiles</h5>
            <ul>
              <li>
                <a href="https://www.bmv.com.mx/" target="_blank" rel="noopener noreferrer" className="link">
                  Bolsa Mexicana de Valores <FaExternalLinkAlt />
                </a>
              </li>
              <li>
                <a href="https://www.gbm.com.mx/" target="_blank" rel="noopener noreferrer" className="link">
                  GBM+ <FaExternalLinkAlt />
                </a>
              </li>
              <li>
                <a href="https://www.actinver.com/" target="_blank" rel="noopener noreferrer" className="link">
                  Actinver <FaExternalLinkAlt />
                </a>
              </li>
            </ul>
          </div>
        ),
        icon: <AiOutlineStock size={150} className="icon-red" />,
      },
      {
        title: "Diversificación y Gestión del Riesgo",
        content: `
          Aprende a distribuir tus inversiones en diferentes sectores para reducir riesgos y aumentar oportunidades de rendimiento.`,
        detailedContent: (
          <div>
            <h5>¿Qué es la Diversificación?</h5>
            <p>
              La diversificación es una estrategia que consiste en distribuir tus
              inversiones en diferentes sectores, activos o mercados para minimizar
              riesgos.
            </p>
      
            <h5>Beneficios de Diversificar</h5>
            <ul>
              <li>Reduce el impacto de pérdidas en un solo activo.</li>
              <li>Aumenta las oportunidades de obtener rendimientos consistentes.</li>
              <li>Protege tus inversiones frente a cambios económicos drásticos.</li>
            </ul>
      
            <h5>Ejemplo de Diversificación</h5>
            <p>
              Si tienes <strong>$100,000 MXN</strong>, puedes dividirlo así:
            </p>
            <ul>
              <li>30% en CETES (renta fija).</li>
              <li>30% en acciones (renta variable).</li>
              <li>20% en bienes raíces.</li>
              <li>20% en fondos indexados.</li>
            </ul>
          </div>
        ),
        icon: <AiOutlineBulb size={150} className="icon-yellow" />,
      },
      {
        title: "Conceptos Claves",
        content: `
          Familiarízate con los términos esenciales en finanzas e inversión para tomar decisiones informadas.`,
        detailedContent: (
          <div>
            <h5>Conceptos Claves en Finanzas e Inversión</h5>
            
            <h6>1. ¿Qué es un Ticker?</h6>
            <p>
              Un <strong>ticker</strong> es el símbolo único con el que se identifica una acción en la bolsa de valores.
              Por ejemplo, <strong>WALMEX.MX</strong> es el ticker de Walmart México en la Bolsa Mexicana de Valores.
            </p>
      
            <h6>2. Dividendos</h6>
            <p>
              Los <strong>dividendos</strong> son una parte de las ganancias de una empresa que se distribuyen a sus accionistas.
              No todas las empresas pagan dividendos; algunas reinvierten sus ganancias para crecer.
            </p>
      
            <h6>3. Volatilidad</h6>
            <p>
              La <strong>volatilidad</strong> se refiere a las fluctuaciones en el precio de una acción u otro activo financiero.
              Una alta volatilidad indica movimientos de precio frecuentes y significativos, lo que puede implicar mayor riesgo.
            </p>
      
            <h6>4. Renta Fija vs. Renta Variable</h6>
            <ul>
              <li>
                <strong>Renta Fija:</strong> Instrumentos como los CETES que ofrecen rendimientos predecibles con bajo riesgo.
              </li>
              <li>
                <strong>Renta Variable:</strong> Activos como acciones cuyo rendimiento no está garantizado y depende del mercado.
              </li>
            </ul>
      
            <h6>5. Rendimiento</h6>
            <p>
              El <strong>rendimiento</strong> mide cuánto dinero has ganado (o perdido) en una inversión en relación con lo que invertiste originalmente. 
              Se expresa generalmente como un porcentaje y se calcula como:
              </p>
              <div className="formula-box">
                <p><em>Rendimiento (%) = [(Valor Final - Valor Inicial) / Valor Inicial] x 100</em></p>
              </div>
              <p>
              Por ejemplo, si inviertes $1,000 y al final tienes $1,200, tu rendimiento sería del 20%.
            </p>
      
            <h6>6. Diversificación</h6>
            <p>
              Estrategia que consiste en invertir en diferentes activos para reducir riesgos y aumentar oportunidades de rendimiento. 
              Es como "no poner todos los huevos en la misma canasta".
            </p>
      
            <h6>7. ¿Qué es un Índice Bursátil?</h6>
            <p>
              Un <strong>índice bursátil</strong> mide el desempeño de un grupo de acciones en el mercado. Ejemplo: 
              <a href="https://www.spglobal.com/spdji/en/" target="_blank" rel="noopener noreferrer" className="link">S&P/BMV IPC</a>, que sigue las 35 empresas más grandes de México.
            </p>
      
            <h6>8. Perfil de Inversionista</h6>
            <p>
              Tu perfil de inversionista refleja tu tolerancia al riesgo y objetivos financieros. Puede ser:
              <ul>
                <li><strong>Conservador:</strong> Prefiere estabilidad y baja volatilidad.</li>
                <li><strong>Moderado:</strong> Busca un balance entre seguridad y rendimiento.</li>
                <li><strong>Agresivo:</strong> Dispuesto a asumir riesgos mayores para obtener rendimientos más altos.</li>
              </ul>
            </p>
            
            <h6>9. Liquidez</h6>
            <p>
              La <strong>liquidez</strong> se refiere a qué tan rápido puedes convertir un activo en efectivo sin afectar su precio.
              Los CETES, por ejemplo, tienen alta liquidez, mientras que bienes raíces tienen baja liquidez.
            </p>
          </div>
        ),
        icon: <AiOutlineInfoCircle size={150} className="icon-light-blue" />,
      }
      
  ];

  const totalPages = courseContent.length;

  const handlePageChange = (_, page) => setCurrentPage(page);

  return (
    <div className="financial-course-container">
      <Card className="course-card">
        <h4>{courseContent[currentPage - 1].title}</h4>
        <div className="icon-container">{courseContent[currentPage - 1].icon}</div>
        <p className="course-content">{courseContent[currentPage - 1].content}</p>
        {courseContent[currentPage - 1].detailedContent}
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          color="primary"
          className="pagination"
        />
      </Card>
    </div>
  );
};

export default FinancialEducationCourse;
