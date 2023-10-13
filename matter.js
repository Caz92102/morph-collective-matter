<script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js"></script>
<script>
function initSimulation() {
  var Engine = Matter.Engine,
    Render = Matter.Render,
    Events = Matter.Events,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies;

  // create an engine
  var engine = Engine.create(),
    world = engine.world;

  // Get the container element and its dimensions
  var containerElement = document.querySelector(".tag-canvas");
  var containerWidth = containerElement.clientWidth + 2;
  var containerHeight = containerElement.clientHeight + 2;

  // create a renderer
  var render = Render.create({
    element: containerElement,
    engine: engine,
    options: {
      width: containerWidth,
      height: containerHeight,
      pixelRatio: 1,
      background: "transparent",
      border: "none",
      wireframes: false
    }
  });

  // create bounds
  var ground = Bodies.rectangle(
    containerWidth / 2 + 160,
    containerHeight + 80,
    containerWidth + 320,
    160,
    { render: { fillStyle: "#000000" }, isStatic: true }
  );
  var wallLeft = Bodies.rectangle(
    -80,
    containerHeight / 2,
    160,
    containerHeight,
    { isStatic: true }
  );
  var wallRight = Bodies.rectangle(
    containerWidth + 80,
    containerHeight / 2,
    160,
    1200,
    { isStatic: true }
  );
  var roof = Bodies.rectangle(
    containerWidth / 2 + 160,
    -80,
    containerWidth + 320,
    160,
    { isStatic: true }
  );

  // object colors & variables
  var tagVideos = "#EDDC8C";
  var videos = "#B3E8F3";
  var abouts = "#4D4D4D";

  var border = 1;
  var radius = 20;

  // create objects

  // Digital
  var tagUserresearch = Bodies.rectangle(containerWidth / 2 + 150, 500, 164, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/650833d0628374915846188d/65298b23af0e864ce18df650_Group%202516.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagWebflow = Bodies.rectangle(containerWidth / 2 + 150, 460, 240, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/650833d0628374915846188d/65298b220cd3971d13235f8f_Group%202508.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagMaterialdesign = Bodies.rectangle(containerWidth / 2 + 250, 420, 200, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/650833d0628374915846188d/65298b22b834132d5b79beb6_Group%202509.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagConceptdev = Bodies.rectangle(containerWidth / 2 - 75, 380, 160, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/650833d0628374915846188d/65298b23297de02af3f55eda_Group%202510.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagMotion = Bodies.rectangle(
    containerWidth / 2 - 74, 540, 248, 56, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/650833d0628374915846188d/65298b23af0e864ce18df629_Group%202511.svg",
          xScale: 1,
          yScale: 1
        }
      }
    }
  );
  var tagLottie = Bodies.rectangle(containerWidth / 2 + 174, 490, 105, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/650833d0628374915846188d/65298ce4ae3d89c388780387_lottie-matter.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagPrototyping = Bodies.rectangle(containerWidth / 2 - 142, 440, 186, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/650833d0628374915846188d/65298d35e4d87e85116438ab_prototyping-matter.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var taguiux = Bodies.rectangle(containerWidth / 2 - 142, 440, 186, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/650833d0628374915846188d/65298d7d99c37153d79bebc0_uiux.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagComponent = Bodies.rectangle(containerWidth / 2 - 242, 420, 168, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/650833d0628374915846188d/65298e50b4930aaef8bafe01_component.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tag3d = Bodies.rectangle(containerWidth / 2 + 174, 490, 105, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/650833d0628374915846188d/65298b23b910c6e2991da808_Group%202517.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });

  // Branding
  var tagProjectManagement = Bodies.rectangle(containerWidth / 2 + 150, 500, 164, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/650833d0628374915846188d/652998a8818b1d4d5cefa75d_porject.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagVisualidentity = Bodies.rectangle(containerWidth / 2 + 150, 460, 240, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/650833d0628374915846188d/652999033c621cb4799ba5e8_vi.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagArtdirection = Bodies.rectangle(containerWidth / 2 + 250, 420, 200, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/650833d0628374915846188d/652999ece7895db2b0ae42aa_ad-matter.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  
  // add all of the bodies to the world
  World.add(engine.world, [
    ground,
    wallLeft,
    wallRight,
    roof,
    tag3d,
    tagComponent,
    taguiux,
    tagPrototyping,
    tagLottie,
    tagMotion,
    tagConceptdev,
    tagMaterialdesign,
    tagWebflow,
    tagUserresearch,
    tagArtdirection,
    tagVisualidentity,
    tagProjectManagement,
    
  ]);

  // add mouse control
  var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

  World.add(world, mouseConstraint);

  // keep the mouse in sync with rendering
  render.mouse = mouse;

  // Allow page scrolling in matter.js window
  mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
  mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

  // Detect clicks vs. drags
  let click = false;

  document.addEventListener("mousedown", () => (click = true));
  document.addEventListener("mousemove", () => (click = false));
  document.addEventListener("mouseup", () =>
    console.log(click ? "click" : "drag")
  );

  // Create a On-Mouseup Event-Handler
  Events.on(mouseConstraint, "mouseup", function (event) {
    var mouseConstraint = event.source;
    var bodies = engine.world.bodies;
    if (!mouseConstraint.bodyB) {
      for (i = 0; i < bodies.length; i++) {
        var body = bodies[i];
        // Check if clicked or dragged
        if (click === true) {
          if (
            Matter.Bounds.contains(body.bounds, mouseConstraint.mouse.position)
          ) {
            var bodyUrl = body.url;
            console.log("Body.Url >> " + bodyUrl);
            // Hyperlinking feature
            if (bodyUrl != undefined) {
              //window.location.href = bodyUrl;
              window.open(bodyUrl, "_blank");
              console.log("Hyperlink was opened");
            }
            break;
          }
        }
      }
    }
  });

  // run the engine
  Engine.run(engine);

  // run the renderer
  Render.run(render);
}

// Get the container element
var containerElement = document.querySelector(".tag-canvas");

// Create an intersection observer
var observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Initialize the simulation when the element is visible
      initSimulation();

      // Disconnect the observer after triggering the tagSocialstrategie
      observer.disconnect();
    }
  });
}, {});

// Observe the container element
observer.observe(containerElement);

</script>
