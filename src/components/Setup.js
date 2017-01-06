import React from 'react';

class Setup extends React.Component {
	render() {
		return (
			<div className="setupFormContainer well">
				<form className="form-horizontal">
					<fieldset>
						<legend>Setup Your Environment</legend>
							<div className="form-group">
								<label>Choose Background
									<div>
										<label htmlFor="bg3601" className="control-label">360-1
											<input id="bg3601" type="radio" name="vr-background" value="360-1" checked />
										</label>
										<label htmlFor="bg3602" className="control-label">360-2
											<input id="bg3602" type="radio" name="vr-background" value="360-2" />
										</label>
										<label htmlFor="bg3603" className="control-label">360-3
											<input id="bg3603" type="radio" name="vr-background" value="360-3" />
										</label>
									</div>
								</label>
							</div>
						
							<div className="form-group">
								<label className="control-label">Display floor?</label>
								<div className="radio">
									<label htmlFor="floorYes" className="control-label">
										<input id="floorYes" type="radio" name="vr-floor" value="yesfloor" checked />"Yes"
									</label>
								</div>
								<div className="radio">
									<label htmlFor="floorNo" className="control-label">
										<input id="floorNo" type="radio" name="vr-floor" value="nofloor" />"No"
									</label>
								</div>
							</div>
					
						<label>Display walls?</label>
						<input type="radio" name="vr-walls" value="yes" />Yes
						<input type="radio" name="vr-walls" value="no" checked />No
						<br />
						<select id="floor-textures">
							<option>image-1</option>
							<option>image-1</option>
							<option>image-1</option>
							<option>image-1</option>
						</select>
						<br />
						<select id="wall-textures">
							<option>image-1</option>
							<option>image-1</option>
							<option>image-1</option>
							<option>image-1</option>
						</select>
						<br />
						<button>Save</button>
					</fieldset>
				</form>
			</div>
		);
	}
}

export default Setup;