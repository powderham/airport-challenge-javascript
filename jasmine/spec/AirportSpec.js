describe('Airport', function() {

  it('The airport exists', function() {
    airport = new Airport();
    expect(airport).toBeTruthy();
  });

  describe('Landing tests', function() {

    it('Should allow a plane to land', function() {
      airport = new Airport();
      plane = new Plane();
      airport.landPlane(plane);
      expect(airport.terminal).toContain(plane)
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

//   describe "Landing tests" do

//     it "Planes should not be able to land twice" do
//       @airport.land_plane(@plane)
//       expect{@airport.land_plane(@plane)}.to raise_error('Plane has already landed')
//     end
//   end
//
//   describe "Take off tests" do
//     it "Planes should not be able to take off if they are not in the airport" do
//       expect{@airport.take_off(@plane)}.to raise_error('Plane is not in the airport')
//     end
//
//     it "Remove plane should remove plane" do
//       @airport.land_plane(@plane)
//       @airport.take_off(@plane)
//       expect(@airport.planes).to_not include(@plane)
//     end
//
//     it "Update log should update log" do
//       @airport.land_plane(@plane)
//       @airport.take_off(@plane)
//       expect(@airport.show_log).to eq ["Plane #{@plane} landed","Plane #{@plane} took off"]
//     end
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
//
//   describe "Capacity tests" do
//     it "Airport should have a default capacity" do
//       expect(@airport).to have_attributes(:capacity => 10)
//     end
//
//     it "Airport should have a definable capacity" do
//       capacity_airport = Airport.new(15)
//       expect(capacity_airport).to have_attributes(:capacity => 15)
//     end
//
//     it "Planes should not be able to land if capacity is full" do
//       10.times do @airport.land_plane(Plane.new) end
//       expect{@airport.land_plane(@plane)}.to raise_error('Cannot land due to no capacity')
//     end
//
//     it "Airport should stand up to rush hour" do
//       expect{10.times do @airport.land_plane(Plane.new) end}.not_to raise_error
//     end
//   end
// end
