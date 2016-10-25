describe('Airport', function() {

  it('The airport exists', function() {
    airport = new Airport();
    expect(airport).toBeTruthy();
  });

  describe('Landing tests', function() {

    it('should allow a plane to land', function() {
      airport = new Airport();
      plane = new Plane();
      airport.landPlane(plane);
      expect(airport.terminal).toContain(plane)
    });

    it('should not allow a plane to land that is already in the airport', function() {
      airport = new Airport();
      plane = new Plane();
      airport.landPlane(plane);
      expect( function() {airport.landPlane(plane); } ).toThrow('Plane is already in the airport')
    });
  });

  describe('Taking off tests', function() {
    it('Should allow a plane to take off', function() {
      airport = new Airport();
      plane = new Plane();
      airport.landPlane(plane);
      airport.takeOff(plane);
      expect(airport.terminal).not.toContain(plane);
    });

    it('cannot take off if it\'s not landed', function() {
      airport = new Airport();
      plane = new Plane();
      airport.landPlane(plane);
      airport.takeOff(plane);
      expect(airport.terminal).not.toContain(plane);
      expect( function() {airport.takeOff(plane); } ).toThrow('Plane not in airport')
    });
  });

  describe('Capacity', function() {
    it('should not allow a plane to land if full', function () {
      airport = new Airport();
      for(i=1; i<21; i++) {airport.landPlane(new Plane())}
      plane1 = new Plane();
      expect( function() {airport.landPlane(plane1); } ).toThrow('Airport is full');
    });

    it('has a defualt capacity of 20', function () {
      airport = new Airport();
      expect(airport.CAPACITY).toBe(20);
    });
  });

  describe('Weather', function() {
    it('will not allow a plane to land during stormy weather', function() {
      airport = new Airport();
      plane1 = new Plane();
      weather = new Weather();
      // spyOn(airport, stormyWeather()).andReturn(true)
      spyOn(weather, function() {weather.isStormy()}).andReturn(true)
      console.log(airport.weather.stormyWeather)
      expect( function() {airport.landPlane(plane1); } ).toThrow('Cannot land during stormy weather');
    });
  });
});

// describe Airport do
//
//   before(:each) do
//     @airport = Airport.new
//     #Forcing the method stormy to return false with allow
//     allow(@airport).to receive_messages(:stormy? => false)
//     @plane = Plane.new
//   end
//
//   describe "Weather tests" do
//     it "Should not allow landing during bad weather" do
//       #Forcing :stormy to return true
//       allow(@airport).to receive_messages(:stormy? => true)
//       expect{@airport.land_plane(@plane)}.to raise_error("Cannot land due to bad weather")
//     end
//
//     it "Should not allow take off during bad weather" do
//       #Forcing :stormy to return true
//       allow(@airport).to receive_messages(:stormy? => true)
//       expect{@airport.take_off(@plane)}.to raise_error('Cannot take off due to bad weather')
//     end
//
//   end
// end
