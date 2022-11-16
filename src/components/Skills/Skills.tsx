import React from "react";

interface SkillsProps {}

const Skills: React.FunctionComponent<SkillsProps> = () => {
  return (
    <section>
      <div>
        <h3>Experiencia</h3>
        <div>
          <h5>Ene 2017 – Nov 2022</h5>
          <h4>Funcionario Público</h4>
          <p>
            Formulación, Viabilización, Control y Evaluación de Proyectos y
            Planes. <br />
            Coordinación del Banco de Proyectos Municipal. <br />
            Gestión del Plan de Desarrollo Municipal. <br />
            Atención a plataformas de contratación e indicadores.
          </p>
        </div>
        <div>
          <h5>Sep 2016 – Dic 2016</h5>
          <h4>Coordinador de Proyecto SAT</h4>
          <p>
            Educación y sensibilización de comunidades. <br /> Análisis de
            amenazas de riesgos de desastres.
          </p>
        </div>
        <div>
          <h5>Jun 2015 – Jun 2016</h5>
          <h4>Jefe Técnico / Dirección de Calidad</h4>
          <p>
            Manejo de personal. <br /> Supervisión al proceso de revisión
            técnico-mecánica de vehículos automotores. <br /> Mantenimiento del
            Sistema de Gestión de Calidad. <br /> Auditoría interna.
          </p>
        </div>
        <div>
          <h5>Jul 2014 – Nov 2014</h5>
          <h4>Estudiante Auxiliar</h4>
          <p>
            Simulación del flujo de espumas en medios porosos. <br />
            Programación en FORTRAN. <br /> Solución de ecuaciones de
            difusividad en medios trifásicos.
          </p>
        </div>
      </div>
      <div>
        <h3>Skills</h3>
        <div>
          50% <p>Skill Name</p>
        </div>
        <div>
          50% <p>Skill Name</p>
        </div>
        <div>
          50% <p>Skill Name</p>
        </div>
        <div>
          50% <p>Skill Name</p>
        </div>
        <p>
          Soy un profesional en el que se destaca la disciplina, la preparación
          y el desarrollo de proyectos con medidas de calidad.
        </p>
      </div>
    </section>
  );
};

export default Skills;
