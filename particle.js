if(particle!=null){
    particle.display();

      if (particle.body.position.y>760)
      {
                   

        if (particle.body.positon.x < 300)
        {
            score=score+500;
            particle=nill;
            if ( count>= 5) gameState = "end";
        }
    }
}